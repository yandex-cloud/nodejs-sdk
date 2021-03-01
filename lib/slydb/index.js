var ydb = require('ydb-sdk');

function createDriver(database, endpoint, authService) {
    if (!database) {
        database = process.env['YDB_DATABASE']
    }
    if (!database) {
        throw new Error("Database not set")
    }
    if (!endpoint) {
        endpoint = 'grpcs://ydb.serverless.yandexcloud.net:2135'
    }
    if (!authService) {
        authService = ydb.getCredentialsFromEnv(
            endpoint,
            database,
            ydb.getLogger({level: 'debug'})
        )
    }
    return new ydb.Driver(endpoint, database, authService)
}

module.exports = {
    createDriver,
};
