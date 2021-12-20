import { ChannelCredentials, ChannelOptions, Client } from '@grpc/grpc-js';

export interface TokenService {
    getToken: () => Promise<string>;
}

export interface GeneratedServiceClientCtor {
    new(
        address: string,
        credentials: ChannelCredentials,
        options?: Partial<ChannelOptions>,
    ): Client;
}
