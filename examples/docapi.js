const run = require('./').run;
const { DocAPIService } = require('../lib/slydb/docapi/docapi.js')

run(async (session, _, folderId) => {
    var endpoint = 'https://docapi.serverless.yandexcloud.net/ru-central1/b1g11111111111111111/etn22222222222222222';
    var docapi = new DocAPIService(endpoint, session)
    var params = {
        TableName: "scale/pets",
        Key:{
            "species": "cat",
            "name": "Tom"
        }
    };
    docapi.getItem(params).then(res => { console.log(res); }).catch(err => { console.log(err); });
});
