const run = require('./').run;
const { NetworkService } = require('../api/vpc/v1');
const {
    ImageService,
    InstanceService,
    IpVersion,
} = require('../api/compute/v1');

const TARGET_ZONE_ID = 'ru-central1-a';

run(async (session, cloudId, folderId) => {
    const imageService = new ImageService(session);
    const instanceService = new InstanceService(session);
    const networkService = new NetworkService(session);

    const networksResponse = await networkService.list({ folderId });
    const network = networksResponse.networks.pop();
    if (!network) {
        throw new Error(`There is no networks created in folder ${folderId}`);
    }

    const subNetworksResponse = await networkService.listSubnets({
        networkId: network.id,
    });
    const subNetwork = subNetworksResponse.subnets
        .filter((sn) => sn.zoneId === TARGET_ZONE_ID)
        .pop();
    if (!subNetwork) {
        throw new Error(
            `There is no subnet exists for ${TARGET_ZONE_ID} in ${network.id}`
        );
    }

    const image = await imageService.getLatestByFamily({
        family: 'ubuntu-1804-lts',
        folderId: 'standard-images',
    });

    let operation = await instanceService.create({
        folderId: folderId,
        zoneId: TARGET_ZONE_ID,
        platformId: 'standard-v2',
        labels: { 'nodejs-sdk': 'yes' },
        resourcesSpec: {
            memory: 2 * 1024 * 1024 * 1024,
            cores: 2,
        },
        bootDiskSpec: {
            autoDelete: true,
            diskSpec: {
                size: 10 * 1024 * 1024 * 1024,
                imageId: image.id,
            },
        },
        networkInterfaceSpecs: [
            {
                subnetId: subNetwork.id,
                primaryV4AddressSpec: {
                    oneToOneNatSpec: { ipVersion: IpVersion.IPV4 },
                },
            },
        ],
    });

    operation.on('status', (op) => {
        console.log(
            `Operation ${op.id} still running (spent ${op.timeSpent()} ms)`
        );
    });

    operation = await operation.completion(session);
    console.log(
        `Instance ${
            operation.getResponse().id
        } created, ${operation.timeSpent()}ms spent.`
    );
});
