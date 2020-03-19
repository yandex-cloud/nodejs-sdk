const run = require('./').run;
const {
    RegistryService,
    RegistryDataService,
} = require('../api/iot/devices/v1');

run(async (session, cloudId, folderId) => {
    const registryService = new RegistryService(session);
    const dataService = new RegistryDataService(session);

    const registries = await registryService.list({ folderId });
    console.log(`found ${registries.registries.length} registries in folder ${folderId}`);

    await Promise.all(
        registries.registries.map((registry) => {
            console.log(`broadcasting to ${registry.id}`);
            return dataService.publish({
                registryId: registry.id,
                topic: `$registries/${registry.id}/commands/heartbeat`,
                data: Buffer.from('{}'),
            });
        })
    );

    console.log('all broadcasts sent');
});
