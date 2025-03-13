import { credentials } from '@grpc/grpc-js';
import { DateTime } from 'luxon';
import { createChannel } from 'nice-grpc';
import { importPKCS8, SignJWT } from 'jose';
import { cloudApi, serviceClients } from '..';
import { getServiceClientEndpoint } from '../service-endpoints';
import { IIAmCredentials, ISslCredentials, TokenService } from '../types';
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

    constructor(iamCredentials: IIAmCredentials, sslCredentials?: ISslCredentials) {
        this.iamCredentials = iamCredentials;
        this.tokenTimestamp = null;

        this.sslCredentials = sslCredentials;
    }

    private get expired() {
        return (
            !this.tokenTimestamp
            || DateTime.utc().diff(this.tokenTimestamp).valueOf() > this.tokenExpirationTimeout
        );
    }

    public async getToken(): Promise<string> {
        if (this.expired) {
            await this.initialize();
        }

        return this.token;
    }

    private client() {
        const endpoint = getServiceClientEndpoint(IamTokenServiceClient);
        const channel = createChannel(endpoint, credentials.createSsl());

        return clientFactory.create(IamTokenServiceClient.service, channel);
    }

    private cleanPrivateKey(key: Buffer | string): string {
        const stringKey = Buffer.isBuffer(key) ? key.toString() : key;

        return stringKey.slice(stringKey.indexOf('-----BEGIN PRIVATE KEY-----'));
    }

    private async getJwtRequest() {
        const now = DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const alg = 'PS256';
        const privateKey = await importPKCS8(this.cleanPrivateKey(this.iamCredentials.privateKey), alg);

        const jwt = await new SignJWT()
            .setProtectedHeader({ alg, kid: this.iamCredentials.accessKeyId, typ: 'JWT' })
            .setIssuer(this.iamCredentials.serviceAccountId)
            .setAudience('https://iam.api.cloud.yandex.net/iam/v1/tokens')
            .setIssuedAt(Math.round(now.toSeconds()))
            .setExpirationTime(Math.round(expires.toSeconds()))
            .sign(privateKey);

        return jwt;
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
        const deadline = DateTime.now().plus({ millisecond: this.tokenRequestTimeout }).toJSDate();

        return this.client().create(
            cloudApi.iam.iam_token_service.CreateIamTokenRequest.fromPartial({
                jwt: await this.getJwtRequest(),
            }),
            { deadline },
        );
    }
}
