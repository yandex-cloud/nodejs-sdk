var ydb = require('ydb-sdk');

function createDriver(database, endpoint, authService) {
    if (database == null) {
        database = process.env['YDB_DATABASE']
    }
    if (database == null) {
        throw new Error("Database not set")
    }
    if (endpoint == null) {
        endpoint = 'grpcs://ydb.serverless.yandexcloud.net:2135'
    }
    if (authService == null) {
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