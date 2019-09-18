import { ChannelCredentials } from 'grpc';

interface GenericConfig {
  endpoint: string;
  pollInterval: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
  oauthToken: string;
}

export interface MetadataCredentialsConfig extends GenericConfig {
  metadataToken: boolean;
}

export class Session {
  constructor(config: OAuthCredentialsConfig | MetadataCredentialsConfig);

  client<T>(cls: { new (address: string, credentials: ChannelCredentials, options?: object): T }): Promise<T>;
}
