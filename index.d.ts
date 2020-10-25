import { ChannelCredentials } from 'grpc';

interface GenericConfig {
    pollInterval?: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
    oauthToken: string;
}

export interface IamTokenCredentialsConfig extends GenericConfig {
    iamToken: string;
}

export class Session {
    constructor(
        config:
            | OAuthCredentialsConfig
            | IamTokenCredentialsConfig
            | GenericConfig
    );

    setEndpoint(newEndpointAddress: string);

    client<T>(cls: {
        new (
            address: string,
            credentials: ChannelCredentials,
            options?: object
        ): T;
    }): T;
}

export class TokenService {
    initialize(): Promise<void>;
    getToken(): string;
}
