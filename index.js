let grpc = require('grpc');
let iam = require('./api/iam/v1');
let endpoints = require('./api/endpoint');
let util = require('./lib/util');
let metadata = require('./lib/metadata');
require('./lib/operation');
async function createIamToken(iamEndpoint, req) {
  const ctor = iam.IamTokenService();
  let client = new ctor(iamEndpoint, grpc.credentials.createSsl());
  client = util.pimpServiceInstance(client);
  const resp = await client.create(req);
  return resp.iamToken;
}
async function getEndpointAddress(cloudEndpoint, apiEndpointId) {
  const ctor = endpoints.ApiEndpointService();
  let client = new ctor(cloudEndpoint, grpc.credentials.createSsl());
  client = util.pimpServiceInstance(client);
  const resp = await client.get({ apiEndpointId });
  return resp.address;
}
async function newTokenCreator(config) {
  if (config.metadataToken === true || !config.oauthToken) {
    const tokenService = new metadata.TokenService();
    await tokenService.initialize();
    return async () => {
      return tokenService.getToken();
    };
  }
  const address = await getEndpointAddress(config.endpoint, 'iam');
  return () => {
    return createIamToken(address, { yandexPassportOauthToken: config.oauthToken });
  };
}
async function newChannelCredentials(tokenCreator) {
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
  endpoint: 'api.cloud.yandex.net:443',
  pollInterval: 1000,
  metadataToken: false
};
class Session {
  constructor(config) {
    this.__config = {
      ...defaultConfig,
      ...config
    };
  }
  async client(clazz) {
    const ctor = clazz();
    const srvEndpoint = await getEndpointAddress(this.__config.endpoint, ctor.__endpointId);
    const tokenCreator = await newTokenCreator(this.__config);
    const channelCredentials = await newChannelCredentials(tokenCreator);
    const client = new ctor(srvEndpoint, channelCredentials, undefined, tokenCreator);
    return util.pimpServiceInstance(client);
  }
}
module.exports = { Session };
