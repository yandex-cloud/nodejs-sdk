const fetch = require('node-fetch');
const fs = require('fs');
const yc = require('../../../index.js');

class StorageObject {
    constructor(bucketName, objectName, bufferPromise) {
        this.bucketName = bucketName;
        this.objectName = objectName;
        this.bufferPromise = bufferPromise;
    }

    static fromFile(bucketName, objectName, fileName) {
        return new this(
            bucketName,
            objectName,
            new Promise((resolve, reject) => {
                fs.readFile(fileName, (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(data);
                });
            })
        );
    }

    static fromString(bucketName, objectName, content) {
        return this.fromBuffer(
            bucketName,
            objectName,
            Buffer.from(content, 'utf-8')
        );
    }

    static fromBuffer(bucketName, objectName, buffer) {
        return new this(
            bucketName,
            objectName,
            new Promise((resolve) => {
                resolve(buffer);
            })
        );
    }

    async getData(encoding) {
        encoding = encoding || 'utf-8';
        let buffer = await this.bufferPromise;
        return buffer.toString(encoding);
    }
}

class StorageServiceImpl {
    constructor(address, credentials, options, tokenCreator) {
        this._address = address;
        this._tokenCreator = tokenCreator;

        this.$method_definitions = {};
    }

    _url(bucketName, objectName) {
        return `https://${this._address}/${bucketName}/${objectName}`;
    }

    async getObject(bucketName, objectName) {
        const token = await this._tokenCreator();

        const res = await fetch(this._url(bucketName, objectName), {
            method: 'GET',
            headers: {
                'X-YaCloud-SubjectToken': token,
            },
        });

        if (!res.ok) {
            throw new Error(
                `Storage replied with ${res.status}: ${res.statusText}`
            );
        }

        return StorageObject.fromBuffer(bucketName, objectName, res.buffer());
    }

    async putObject(object) {
        const token = await this._tokenCreator();
        const buffer = await object.bufferPromise;

        const res = await fetch(
            this._url(object.bucketName, object.objectName),
            {
                method: 'PUT',
                headers: {
                    'X-YaCloud-SubjectToken': token,
                },
                body: buffer,
            }
        );

        if (!res.ok) {
            throw new Error(
                `Storage replied with ${res.status}: ${res.statusText}`
            );
        }
    }
}

StorageServiceImpl.__endpointId = 'storage';

function StorageService(session) {
    if (session === undefined) {
        session = new yc.Session();
    }

    return session.client(StorageServiceImpl);
}

module.exports = {
    StorageObject,
    StorageService,
};
