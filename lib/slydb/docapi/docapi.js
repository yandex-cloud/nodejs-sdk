var AWS = require('aws-sdk');

class DocapiServiceSettings {
    constructor(address, credentials, options, tokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }
}

DocapiServiceSettings.__endpointId = 'docapi';

class DocapiService {
    constructor(endpoint, session) {
        if (session === undefined) {
            session = new Session(null);
        }
        var settings = session.client(DocapiServiceSettings);
        this._tokenCreator = settings._tokenCreator;
        AWS.config.update({
            region: "us-west-2",
            // Docapi proxy endpoint, https://host:port/full/database/name
            endpoint: endpoint,
            /*
              Does not matter - we later replace Authorization header
            */
            accessKeyId: "fakeMyKeyId",
            secretAccessKey: "fakeSecretAccessKey",

        });
        this.dynamoDb = new AWS.DynamoDB()
        this.documentClient = new AWS.DynamoDB.DocumentClient()
    }

    async createTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.createTable(params, null), token);
    }

    async deleteTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.deleteTable(params, null), token);
    }

    async describeTable(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.describeTable(params, null), token);
    }

    async listTables(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.dynamoDb.listTables(params, null), token);
    }


    async batchGetItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchGet(params, null), token);
    }

    async batchWriteItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.batchWrite(params, null), token);
    }

    async deleteItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.delete(params, null), token);
    }

    async getItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.get(params, null), token);
    }

    async putItem(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.put(params, null), token);
    }

    async query(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.query(params, null), token);
    }

    async scan(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.scan(params, null), token);
    }

    async transactGetItems(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactGet(params, null), token);
    }

    async transactWriteItems(params) {
        let token = await this._tokenCreator();
        return this.sendRequest(this.documentClient.transactWrite(params, null), token);
    }

    sendRequest(request, token) {
        request.on('sign', function (req) {
            req.httpRequest.headers['Authorization'] = 'Bearer ' + token;
        })
        return new Promise((resolve, reject) => {
            request.send((err, out) => {
                if (err) reject(err)
                else resolve(out);
            });
        })
    }
}

module.exports = {
    DocapiService,
};

