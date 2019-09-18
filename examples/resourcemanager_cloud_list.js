const run = require('./').run;
const resourceManager = require('yandex-cloud/api/resourcemanager/v1');
run(async session => {
  const cloudService = await session.client(resourceManager.CloudService);
  const cloudsResponse = await cloudService.list({ pageSize: 100 });
  cloudsResponse.clouds.forEach(cloud => {
    console.log(`found cloud id = ${cloud.id}, name = ${cloud.name}`);
  });
});
