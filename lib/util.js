const jsutil = require('util');
const registar = require('./registar');

// import all required contribs
[
    '../contrib/google/api',
    '../contrib/google/protobuf/',
    '../contrib/google/rpc',
    '../contrib/google/type',
].forEach((path) => require(path));

module.exports.pimpServiceInstance = function(instance) {
    for (let methodName of Object.keys(instance.$method_definitions)) {
        instance[methodName] = jsutil.promisify(instance[methodName]);
    }
    return instance;
};

module.exports.extractAny = function(any) {
    const fqn = any.type_url.substring(any.type_url.lastIndexOf('/') + 1);
    const pkg = registar.lookup(fqn.substring(0, fqn.lastIndexOf('.')));
    if (!pkg) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    const messageName = fqn.substring(fqn.lastIndexOf('.') + 1);
    const cls = pkg[messageName];
    if (!cls) {
        throw new Error(`google.protobuf.Any contains unknown type ${fqn}`);
    }
    return cls.decode(any.value);
};
