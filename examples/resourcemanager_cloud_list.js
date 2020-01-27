const run = require('./').run;
const { CloudService } = require('../api/resourcemanager/v1');

run(async (session) => {
    const cloudService = new CloudService(session);

    const cloudsResponse = await cloudService.list({ pageSize: 100 });
    cloudsResponse.clouds.forEach((cloud) => {
        console.log(`found cloud id = ${cloud.id}, name = ${cloud.name}`);
    });
});
