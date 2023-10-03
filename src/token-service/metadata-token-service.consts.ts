export const INITIALIZE_MAX_ATTEMPTS_OF_GET_TOKEN = 5;

export const INITIALIZE_BACKOFF_SLOT_DURATION = 5; // ms

export const INITIALIZE_BACKOFF_CEILING = 3; // up to 5 * (2 ** 3) = 40 ms

export const INITIALIZE_BACKOFF_UNCERTAIN_RATIO = 0.5;

export const GET_TOKEN_BACKOFF_SLOT_DURATION = 1 * 30 * 1000; // every 30 mins

export const GET_TOKEN_BACKOFF_CEILING = 1; // up to 30 * (2 ** 1) = 60 min

export const GET_TOKEN_BACKOFF_UNCERTAIN_RATIO = 0.3;

export const TOKEN_MINIMUM_LIFETIME_MARGIN_MS = 15 * 60 * 1000;

export const TOKEN_LIFETIME_LEFT_TO_REFRESH_PCT = 90;

export const TOKEN_LIFETIME_LEFT_TO_REPORT_ERROR_PCT = 80;

export const ERROR_REPORT_INTERVAL_MS = 1 * 60 * 1000;

export const enum Messages {
    /**
     * Inlines: new HRInterval().
     */
    warn_emaining_token_TTL = 'remaining token\'s TTL: %s',

    /**
     * Inlines: url, doUpdateTokenInBackground, axiosOptions.
     */
    debug_ctor = 'metadata-token.ctor: url: %s, doUpdateTokenInBackground: %s, axiosOptions: %o',
    /**
     * Inlines: new HRInterval(), "(too small TTL)"?.
     */
    debug_new_token_was_received = 'new token. TTL: %s%s',
    debug_new_token_was_received_too_small_postfix = ' (too small TTL)',

    trace_getToken = 'metadata-token.getToken',
    trace_destroy = 'metadata-token.destroy',
    trace__getToken = 'metadata-token._getToken',
    trace_initialize = 'metadata-token.initialize',
    trace_fetchToken = 'metadata-token.fetchToken',
    trace_setIamResponse = 'metadata-token.setIamResponse',
    trace_setTimer = 'metadata-token.setTimer',

    /**
     * Inlines: http-status, error-message.
     */
    err_part_http_error = '%s %s',
    /**
     * Inlines: new HRInerval().
     */
    err_part_insufficient_lifetime = 'insufficient lifetime: %s',
    /**
     * Inlines: err_part
     */
    err_failed_fetch = 'failed to fetch token: %s',

    err_invalid_iam_token = 'invalid iam token: %o',

    err_service_is_destroyed = 'service is destroyed',
}

export const DEFAULT_URL = 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';

export const DEFAULT_OPTIONS = {
    headers: {
        'Metadata-Flavor': 'Google',
    },
};

export const DEFAULT_LOGGER_PREFIX = 'metadata-auth';
