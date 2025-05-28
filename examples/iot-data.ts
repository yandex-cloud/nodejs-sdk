import { Session } from '@yandex-cloud/nodejs-sdk';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

import { registryDataService, registryService } from '@yandex-cloud/nodejs-sdk/iot-devices-v1';

const AUTH_TOKEN = getEnv('YC_OAUTH_TOKEN');
const FOLDER_ID = getEnv('YC_FOLDER_ID');

(async () => {
    const session = new Session({ oauthToken: AUTH_TOKEN });
    const registryClient = session.client(registryService.RegistryServiceClient);
    const dataClient = session.client(registryDataService.RegistryDataServiceClient);

    const registries = await registryClient.list(
        registryService.ListRegistriesRequest.fromPartial({
            folderId: FOLDER_ID,
        }),
    );

    log(`Found ${registries.registries.length} registries in folder ${FOLDER_ID}`);

    for (const registry of registries.registries) {
        log(`Broadcasting to ${registry.id}`);

        dataClient.publish(
            registryDataService.PublishRegistryDataRequest.fromPartial({
                registryId: registry.id,
                topic: `$registries/${registry.id}/commands/heartbeat`,
                data: Buffer.from('{"hello": "world"}'),
            }),
        );
    }

    log('Broadcasted to all registries');
})();
