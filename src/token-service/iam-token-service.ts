import { credentials } from '@grpc/grpc-js';
import * as jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { createChannel } from 'nice-grpc';
import { URL } from 'url';
import {
    cloudApi,
    serviceClients,
} from '..';
import {
    getServiceClientEndpoint,
    ServiceEndpointsList,
} from '../service-endpoints';
import {
    IIAmCredentials,
    ISslCredentials,
    TokenService,
} from '../types';
import { clientFactory } from '../utils/client-factory';

const { IamTokenServiceClient } = serviceClients;

export class IamTokenService implements TokenService {
    public readonly sslCredentials?: ISslCredentials;

    private readonly iamCredentials: IIAmCredentials;
    private jwtExpirationTimeout = 3600 * 1000;
    private tokenExpirationTimeout = 120 * 1000;
    private tokenRequestTimeout = 10 * 1000;
    private token = '';
    private tokenTimestamp: DateTime | null;
    private endpointResolver: () => Promise<ServiceEndpointsList>;

    constructor(iamCredentials: IIAmCredentials, endpointResolver: () => Promise<ServiceEndpointsList>, sslCredentials?: ISslCredentials) {
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;

        this.sslCredentials = sslCredentials;
        this.endpointResolver = endpointResolver;
    }

    private get expired() {
        return (
            !this.tokenTimestamp
            || DateTime.utc()
                .diff(this.tokenTimestamp)
                .valueOf() > this.tokenExpirationTimeout
        );
    }

    public async getToken(): Promise<string> {
        if (this.expired) {
            await this.initialize();
        }

        return this.token;
    }

    private async client() {
        const endpoint = await getServiceClientEndpoint(IamTokenServiceClient, this.endpointResolver);
        const channel = createChannel(endpoint, credentials.createSsl());

        return clientFactory.create(IamTokenServiceClient.service, channel);
    }

    private async audienceClaim() {
        const endpointList = await this.endpointResolver();
        const iamEndpoint = endpointList.find((item) => item.serviceIds.includes('iam'));

        if (!iamEndpoint) {
            throw new Error('Endpoint for service IAM is no defined');
        }

        const iamHost = new URL(iamEndpoint.endpoint).hostname;

        return `https://${iamHost}/iam/v1/tokens`;
    }

    private async getJwtRequest() {
        const now = DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const aud = await this.audienceClaim();
        const payload = {
            iss: this.iamCredentials.serviceAccountId,
            aud,
            iat: Math.round(now.toSeconds()),
            exp: Math.round(expires.toSeconds()),
        };
        const options: jwt.SignOptions = {
            algorithm: 'PS256',
            keyid: this.iamCredentials.accessKeyId,
        };

        return jwt.sign(payload, this.iamCredentials.privateKey, options);
    }

    private async initialize() {
        const resp = await this.requestToken();

        if (resp) {
            this.token = resp.iamToken;
            this.tokenTimestamp = DateTime.utc();
        } else {
            throw new Error('Received empty token from IAM!');
        }
    }

    private async requestToken(): Promise<cloudApi.iam.iam_token_service.CreateIamTokenResponse> {
        const deadline = DateTime.now()
            .plus({ millisecond: this.tokenRequestTimeout })
            .toJSDate();
        const client = await this.client();
        const jwtRequest = await this.getJwtRequest();

        return client
            .create(
                cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial({
                    jwt: jwtRequest,
                }),
                { deadline },
            );
    }
}
