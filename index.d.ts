import { ChannelCredentials } from 'grpc';

interface GenericConfig {
  pollInterval: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
  oauthToken: string;
}

export class Session {
  constructor(config: OAuthCredentialsConfig | GenericConfig);

  setEndpoint(newEndpointAddress: string);

  client<T>(cls: { new (address: string, credentials: ChannelCredentials, options?: object): T }): T;
}
