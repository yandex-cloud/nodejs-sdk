import { credentials, Metadata } from '@grpc/grpc-js';
import * as jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import { cloudApi, serviceClients } from '..';
import { getServiceClientEndpoint } from '../service-endpoints';
import { TokenService } from '../types';

const { IamTokenServiceClient } = serviceClients;

export interface IIAmCredentials {
    serviceAccountId: string;
    accessKeyId: string;
    privateKey: Buffer | string;
}

export interface ISslCredentials {
    rootCertificates?: Buffer;
    clientPrivateKey?: Buffer;
    clientCertChain?: Buffer;
}

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

        return new serviceClients.IamTokenServiceClient(
            endpoint,
            credentials.createSsl(),
        );
    }

    private getJwtRequest() {
        const now = DateTime.utc();
        const expires = now.plus({ milliseconds: this.jwtExpirationTimeout });
        const payload = {
            iss: this.iamCredentials.serviceAccountId,
            aud: 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
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

    private async requestToken(): Promise<cloudApi.iam.iam_token.CreateIamTokenResponse> {
        const deadline = DateTime.now().plus({ millisecond: this.tokenRequestTimeout }).toJSDate();

        return new Promise((resolve, reject) => {
            this.client().create(
                cloudApi.iam.iam_token.CreateIamTokenRequest.fromPartial({
                    jwt: this.getJwtRequest(),
                }),
                new Metadata(),
                { deadline },
                (err, response) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response);
                    }
                },
            );
        });
    }
}
