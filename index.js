let grpc = require("grpc");

let iam = require("./api/iam/v1");
let endpoints = require("./api/endpoint");
let util = require("./lib/util");

require("./lib/operation");

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

async function newChannelCredentials(endpoint, config) {
  const address = await getEndpointAddress(endpoint, "iam");

  return grpc.credentials.combineChannelCredentials(
    grpc.credentials.createSsl(),
    grpc.credentials.createFromMetadataGenerator((params, callback) => {
      createIamToken(address, { yandexPassportOauthToken: config.oauthToken })
        .then(token => {
          const md = new grpc.Metadata();
          md.set("authorization", "Bearer " + token);
          return callback(null, md);
        })
        .catch(e => {
          return callback(e);
        });
    })
  );
}

const defaultConfig = {
  endpoint: "api.cloud.yandex.net:443",
  pollInterval: 1000
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
    const srvEndpoint = await getEndpointAddress(
      this.__config.endpoint,
      ctor.__endpointId
    );
    const channelCredentials = await newChannelCredentials(
      this.__config.endpoint,
      this.__config
    );
    const client = new ctor(srvEndpoint, channelCredentials);
    return util.pimpServiceInstance(client);
  }
}

module.exports = {
  Session
};
