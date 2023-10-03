import axios, { AxiosRequestConfig } from 'axios';
import * as util from 'util';
import { TokenService } from '../types';
import { SimpleLogger } from '../utils/simple-logger';

import {
    INITIALIZE_BACKOFF_CEILING,
    INITIALIZE_BACKOFF_SLOT_DURATION,
    INITIALIZE_BACKOFF_UNCERTAIN_RATIO,
    INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN,
    GET_TOKEN_BACKOFF_SLOT_DURATION,
    GET_TOKEN_BACKOFF_CEILING,
    GET_TOKEN_BACKOFF_UNCERTAIN_RATIO,
    TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT,
    TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT,
    TOKEN_MINIMUM_LIFETIME_MARGIN_MS,
    Messages,
    DEFAULT_URL,
    DEFAULT_LOGGER_PREFIX,
    DEFAULT_OPTIONS,
} from './metadata-token-service.consts';
import { HRInterval } from '../utils/hr-interval';

/**
 * Since in the metadata token service the initialize() method contains a loop of retries to get the token, so
 * to keep this loop from hanging on the timer while unit tests, we need to advance the timer between retries inside initialize().
 */
let testInitializeTimerAdvance: (duration: number) => void | undefined;

/**
 * **Only for unit tests purposes**.
 */
export const setTestInitializeTimerAdvance = (timerAdvance: (duration: number) => void) => {
    testInitializeTimerAdvance = timerAdvance;
};

let testInitPromise: Promise<string | void>;

/**
 * **Only for unit tests purposes**.
 */
export const getTestInitPromise = (): Promise<string | void> | undefined => testInitPromise;

// eslint-disable-next-line import/export
export class MetadataTokenService implements TokenService {
    private readonly url: string;
    private readonly axiosOptions: AxiosRequestConfig;
    private readonly doUpdateTokenInBackground;
    private readonly logger;
    private token?: string;
    /**
     * The time after which the token cannot be used. This is the token expiration time minus the minimum time that
     * must be available (TOKEN_MINIMUM_LIFETIME_MARGIN_MS).
     */
    private tokenExpiresAt = 0;
    /**
     * Time of scheduled token renewal. Counted as a percentage of the initial time for which the token
     * was issued (TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT).
     */
    private tokenRefreshAt = 0;
    /**
     * Time after which to issue warning messages about how much time the available token has left. Counted as
     * a percentage of the time for which the token was issued (TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT).
     */
    private tokenStartReportTTLAt = 0;
    /**
     * Error that is returned when retrying getToken(), if the last fetchToken() returned an error and
     * the time of the retry has not yet arrived.
     */
    private tokenLastError?: Error;
    /**
     * Counter of repeated errors received in fetchToken() to make repeated requests with less frequency.
     */
    private tokenErrorCount = 0;

    private currentGetTokenPromise?: Promise<string>;
    private timer?: NodeJS.Timeout;
    private destroyed = false;

    constructor(options?: MetadataTokenService.Options);

    constructor(url: string, options?: MetadataTokenService.Options);

    /* istanbul ignore next */
    constructor(urlOrOptions: string | MetadataTokenService.Options = DEFAULT_URL, options: MetadataTokenService.Options = {}) {
        if (typeof urlOrOptions === 'object') {
            this.url = DEFAULT_URL;
            // eslint-disable-next-line no-param-reassign
            options = urlOrOptions;
        } else {
            this.url = urlOrOptions;
        }

        const {
            logger,
            doUpdateTokenInBackground,
            ...opts
        } = options;

        /* istanbul ignore next */
        this.logger = logger ?? new SimpleLogger({ prefix: DEFAULT_LOGGER_PREFIX });

        this.doUpdateTokenInBackground = doUpdateTokenInBackground ?? false;

        this.axiosOptions = { ...DEFAULT_OPTIONS, ...opts };

        this.logger.debug(Messages.debug_ctor, this.url, this.doUpdateTokenInBackground, this.axiosOptions);

        if (this.doUpdateTokenInBackground) {
            testInitPromise = this.getToken()
                .catch(() => {}); // intentionally without await
        }
    }

    async getToken(): Promise<string> {
        this.logger.trace(Messages.trace_getToken);

        if (this.destroyed) {
            throw new Error(Messages.err_service_is_destroyed);
        }

        if (this.doUpdateTokenInBackground && (this.tokenLastError || this.token)) {
            if (this.tokenLastError) throw this.tokenLastError;

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return this.token!;
        }

        if (!this.currentGetTokenPromise) {
            this.currentGetTokenPromise = this._getToken()
                .finally(() => {
                    delete this.currentGetTokenPromise;
                });
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.currentGetTokenPromise!;
    }

    /**
     * It is recommended to call this method at the beginning of serverless function with context.token parameter.
     * This will reduce serverless function runtime avoiding additional request to the Iam service.
     */
    setIamToken(iamResponse: MetadataTokenService.IamToken) {
        this.logger.trace(Messages.trace_setIamResponse);

        if (!(
            typeof (iamResponse as unknown) === 'object'
            && (iamResponse as unknown) !== null
            && iamResponse.token_type === 'Bearer'
            && typeof (iamResponse.expires_in as unknown) === 'number'
            && iamResponse.expires_in > 0
            && typeof (iamResponse.access_token as unknown) === 'string'
            && iamResponse.access_token !== ''
        )) {
            throw new Error(util.format(Messages.err_invalid_iam_token, iamResponse));
        }

        const TTL = iamResponse.expires_in * 1000 - TOKEN_MINIMUM_LIFETIME_MARGIN_MS;

        // even in non-debug mode output messages that we've got a new token, if there were errors before that
        this.logger[this.tokenLastError ? 'info' : 'debug'](
            Messages.debug_new_token_was_received,
            new HRInterval(iamResponse.expires_in * 1000),
            TTL <= 0 ? Messages.debug_new_token_was_received_too_small_postfix : '',
        );

        if (TTL <= 0) {
            throw new Error(util.format(
                Messages.err_part_insufficient_lifetime,
                new HRInterval(iamResponse.expires_in * 1000),
            ));
        }

        this.token = iamResponse.access_token;
        this.tokenExpiresAt = Date.now() + TTL;
        this.tokenRefreshAt = Date.now() + iamResponse.expires_in * 1000 * (1 - TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT / 100);
        this.tokenStartReportTTLAt = Date.now() + iamResponse.expires_in * 1000 * (1 - TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT / 100);

        delete this.tokenLastError;
        this.tokenErrorCount = 0;
    }

    async destroy() {
        this.logger.trace(Messages.trace_destroy);

        if (this.destroyed) {
            throw new Error(Messages.err_service_is_destroyed);
        }
        this.destroyed = true;

        if (this.timer) {
            clearTimeout(this.timer);
            delete this.timer;
        }
    }

    private async _getToken(): Promise<string> {
        this.logger.trace(Messages.trace__getToken);

        try {
            if (this.tokenLastError && Date.now() < this.tokenRefreshAt) {
                throw this.tokenLastError;
            }

            try {
                if (!this.token || Date.now() >= this.tokenExpiresAt) {
                    await this.initialize();
                } else if (Date.now() >= this.tokenRefreshAt) {
                    try {
                        this.token = await this.fetchToken();
                    } catch {
                        // keep using existing token
                        if (Date.now() >= this.tokenStartReportTTLAt) {
                            this.logger.warn(
                                Messages.warn_emaining_token_TTL,
                                new HRInterval(this.tokenExpiresAt - Date.now()),
                            );
                        }
                    }
                }
            } catch (error) {
                this.tokenLastError = error as Error;

                throw error;
            }
        } finally {
            if (this.doUpdateTokenInBackground && !this.destroyed) {
                this.setTimer();
            }
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.token!;
    }

    private async initialize() {
        this.logger.trace(Messages.trace_initialize);

        delete this.token;

        for (let i = 1; ; i++) {
            try {
                // eslint-disable-next-line no-await-in-loop
                this.token = await this.fetchToken();

                break;
            } catch (error) {
                if (i >= INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN) {
                    throw error;
                }
            }

            // Repeated attempts to get token in case of an error are performed at increasing intervals and adding
            // a random component - to statistically distribute the load on the IAM.

            // eslint-disable-next-line no-bitwise
            const slotsCount = 1 << Math.min(i, INITIALIZE_BACKOFF_CEILING);
            const maxDuration = slotsCount * INITIALIZE_BACKOFF_SLOT_DURATION;
            const duration = Math.trunc(maxDuration * (1 - Math.random() * INITIALIZE_BACKOFF_UNCERTAIN_RATIO));

            // eslint-disable-next-line no-await-in-loop,@typescript-eslint/no-loop-func,no-async-promise-executor
            await new Promise(async (resolve, reject) => {
                try {
                    setTimeout(resolve, duration);

                    // In tests, promote the timer immediately
                    if (testInitializeTimerAdvance) await testInitializeTimerAdvance(duration);
                } catch (error) {
                    /* istanbul ignore next */
                    reject(error);
                }
            });
        }
    }

    private async fetchToken(): Promise<string> {
        this.logger.trace(Messages.trace_fetchToken);

        let token: string;

        // @ts-ignore
        try {
            // eslint-disable-next-line @typescript-eslint/ban-types
            const res = await axios.get<MetadataTokenService.IamToken>(this.url, this.axiosOptions);

            if (res.status !== 200) {
                throw new Error(util.format(Messages.err_part_http_error, res.status, res.statusText));
            }

            this.setIamToken(res.data);

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return this.token!;
        } catch (error_) {
            const error = error_ as Error;

            // eslint-disable-next-line no-bitwise
            const slotsCount = 1 << Math.min(this.tokenErrorCount++, GET_TOKEN_BACKOFF_CEILING);
            const maxDuration = slotsCount * GET_TOKEN_BACKOFF_SLOT_DURATION;

            this.tokenRefreshAt = Date.now() + maxDuration * (1 - Math.random() * GET_TOKEN_BACKOFF_UNCERTAIN_RATIO);

            error.message = util.format(Messages.err_failed_fetch, error.message);

            this.logger.error(error.message);

            throw error;
        }
    }

    private setTimer() {
        this.logger.trace(Messages.trace_setTimer);

        if (this.timer) {
            clearTimeout(this.timer);
        }

        this.timer = setTimeout(async () => {
            try {
                this.token = await this._getToken();
            } catch {
                // nothing - keep using old token or an old error
            }
        }, this.tokenRefreshAt - Date.now());
    }
}

/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/no-namespace,import/export
export namespace MetadataTokenService {
    export type Options = AxiosRequestConfig & {
        /**
         * Any logger that have methods required by SimpleLogger.Logger. Default is new instance of SimpleLogger.
         */
        logger?: SimpleLogger.Logger,

        /**
         * The default is false and the token is always checked that it has not expired each time the getToken()
         * method is called. If the token is out of date, a new token is requested. In this mode, the update logic works well
         * in both standard nodejs and yandex cloud serverless modes.  However, in standard nodejs, you can improve the process
         * of token exposure by enabling timed updates in the background. In serverless mode, timer updates are likely to be problematic,
         * because when the serverless function is not called, the timer events do not work. That's why you should turn it to true
         * only when you are **absolutely sure** that the code will not be used in serverless mode.
         */
        doUpdateTokenInBackground?: boolean,
    };

    export type IamToken = { token_type: 'Bearer', access_token: string, /** in seconds! */ expires_in: number };
}
