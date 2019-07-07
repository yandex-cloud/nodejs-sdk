const run = require("./").run;

const resourceManager = require("@yandex-cloud/sdk/api/resourcemanager/v1");

run(async session => {
  // create CloudService client
  const cloudService = await session.client(resourceManager.CloudService);

  // request cloud listing
  const cloudsResponse = await cloudService.list({ pageSize: 100 });

  // print all found clouds
  cloudsResponse.clouds.forEach(cloud => {
    console.log(`found cloud id = ${cloud.id}, name = ${cloud.name}`);
  });
});
