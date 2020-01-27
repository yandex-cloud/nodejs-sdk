const grpc = require('grpc');
const util = require('./lib/util');
const { EndpointResolver } = require('./lib/endpoint');
const metadata = require('./lib/metadata');
const fetch = require('node-fetch');
const iam = require('./api/iam/v1');
require('./lib/operation');
async function createIamToken(iamEndpoint, req) {
  const ctor = iam.IamTokenService.makeGrpcConstructor();
  let client = new ctor(iamEndpoint, grpc.credentials.createSsl());
  client = util.pimpServiceInstance(client);
  const resp = await client.create(req);
  return resp.iamToken;
}
function newTokenCreator(config, iamEndpoint) {
  if (config.metadataToken === true) {
    const tokenService = new metadata.TokenService();
    return async () => {
      await tokenService.initialize();
      return tokenService.getToken();
    };
  }
  if(config.jwt) {
    return async (jwt) => {
      const { data } = await fetch('https://iam.api.cloud.yandex.net/iam/v1/tokens',{
        method: 'POST',
        body: JSON.stringify({ jwt:jwt }),
        headers: { 'Content-Type': 'application/json' }
      });
      return data.iamToken;
    }
  }
  if(config.iam) {
    return async () => {
      return config.iam;
    }
  }
  return () => {
    return createIamToken(iamEndpoint, { yandexPassportOauthToken: config.oauthToken });
  };
}
function newChannelCredentials(tokenCreator) {
  return grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(),
    grpc.credentials.createFromMetadataGenerator((params, callback) => {
      tokenCreator()
        .then(token => {
          const md = new grpc.Metadata();
          md.set('authorization', 'Bearer ' + token);
          return callback(null, md);
        })
        .catch(e => {
          return callback(e);
        });
    })
  );
}
const defaultConfig = {
  pollInterval: 1000,
  metadataToken: false
};
class Session {
  constructor(config) {
    this.__config = {
      ...defaultConfig,
      ...config
    };
    this.__endpointResolver = new EndpointResolver();
    this.__tokenCreator = newTokenCreator(this.__config, this.__endpointResolver.resolve('iam'));
    this.__channelCredentials = newChannelCredentials(this.__tokenCreator);
  }
  async setEndpoint(newEndpoint) {
    await this.__endpointResolver.updateEndpointList(newEndpoint);
  }
  client(clazz) {
    return util.pimpServiceInstance(new clazz(this.__endpointResolver.resolve(clazz.__endpointId), this.__channelCredentials, undefined, this.__tokenCreator));
  }
}
module.exports = { Session };
