const run = require('./').run;
const { DocapiService } = require('../lib/slydb/docapi/docapi.js')

run(async (session, _, folderId) => {
    var endpoint = 'https://docapi.serverless.yandexcloud.net/ru-central1/b1gu1hg8lo2a8n3cl8gg/etn03hg22ajs8gmbl0s6';
    var docapi = new DocapiService(endpoint, session)
    var params = {
        TableName: "scale/pets",
        Key:{
            "species": "cat",
            "name": "Tom"
        }
    };
    docapi.getItem(params).then(res => { console.log(JSON.stringify(res)); }).catch(err => console.log(err));
});