import { ChannelCredentials } from "grpc";

interface GenericConfig {
  endpoint: string;
  pollInterval: number;
}

export interface OAuthCredentialsConfig extends GenericConfig {
  oauthToken: string;
}

export class Session {
  constructor(config: OAuthCredentialsConfig);

  client<T>(cls: {
    new (address: string, credentials: ChannelCredentials, options?: object): T;
  }): Promise<T>;
}
