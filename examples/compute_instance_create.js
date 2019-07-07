const run = require("./").run;

const compute = require("@yandex-cloud/sdk/api/compute/v1");
const vpc = require("@yandex-cloud/sdk/api/vpc/v1");

const TARGET_ZONE_ID = "ru-central1-a";

run(async (session, cloudId, folderId) => {
  // create all required service' clients
  const imageService = await session.client(compute.ImageService);
  const instanceService = await session.client(compute.InstanceService);
  const networkService = await session.client(vpc.NetworkService);

  // find first network in given folder
  const networksResponse = await networkService.list({ folderId });
  const network = networksResponse.networks.pop();
  if (!network) {
    throw new Error(`There is no networks created in folder ${folderId}`);
  }

  // find sub-network for give zone in found network
  const subNetworksResponse = await networkService.listSubnets({
    networkId: network.id
  });
  const subNetwork = subNetworksResponse.subnets
    .filter(sn => sn.zoneId === TARGET_ZONE_ID)
    .pop();
  if (!subNetwork) {
    throw new Error(
      `There is no subnet exists for ${TARGET_ZONE_ID} in ${network.id}`
    );
  }

  // find latest image for Ubuntu 18.04
  const image = await imageService.getLatestByFamily({
    family: "ubuntu-1804-lts",
    folderId: "standard-images"
  });

  // create instance by given spec
  let operation = await instanceService.create({
    folderId: folderId,
    zoneId: TARGET_ZONE_ID,
    platformId: "standard-v2",
    labels: { "nodejs-sdk": "yes" },
    resourcesSpec: {
      memory: 2 * 1024 * 1024 * 1024,
      cores: 2
    },
    bootDiskSpec: {
      autoDelete: true,
      diskSpec: {
        size: 10 * 1024 * 1024 * 1024,
        imageId: image.id
      }
    },
    networkInterfaceSpecs: [
      {
        subnetId: subNetwork.id,
        primaryV4AddressSpec: {
          oneToOneNatSpec: { ipVersion: compute.IpVersion.IPV4 }
        }
      }
    ]
  });

  // setup operation progress tracking
  // it's important to call Operation.completion to start tracking
  operation.on("status", op => {
    console.log(
      `Operation ${op.id} still running (spent ${op.timeSpent()} ms)`
    );
  });

  // wait for operation completion (will throw on error)
  operation = await operation.completion(session);

  // get operation result
  const instance = operation.getResponse();
  console.log(
    `Instance ${instance.id} created, ${operation.timeSpent()}ms spent.`
  );
});
