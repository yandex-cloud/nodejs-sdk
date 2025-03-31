import { readFile } from '../scripts/detect_services';
import { getServiceClientEndpoint } from './service-endpoints';
import { GeneratedServiceClientCtor } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockServiceClientCtor = GeneratedServiceClientCtor<any>;

describe('service endpoints', () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', async () => {
        const serviceMap = await readFile();
        const missedEndpointsList: string[] = [];

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_dir, { serviceName }] of Object.entries(serviceMap)) {
            const client = await import(`./clients/${serviceName}`);

            const detectedServices = Object.keys(client).filter((importKey) =>
                importKey.endsWith('Service'),
            );

            detectedServices.forEach((detectedService) => {
                Object.keys(client[detectedService]).forEach((clientExportKey) => {
                    if (clientExportKey.endsWith('ServiceClient')) {
                        const serviceName = client[detectedService][clientExportKey].serviceName;

                        let endpoint: string | undefined;

                        try {
                            endpoint = getServiceClientEndpoint({
                                serviceName,
                            } as unknown as MockServiceClientCtor);
                            // eslint-disable-next-line no-empty, @typescript-eslint/no-unused-vars
                        } catch (_err) {}

                        if (endpoint === undefined) missedEndpointsList.push(serviceName);
                    }
                });
            });
        }

        if (missedEndpointsList.length !== 0) {
            throw `Missed endpoints:\n${missedEndpointsList
                .map((missedServiceName) => `"${missedServiceName}"`)
                .join('\n')}`;
        }
    });

    it('should throw exception if endpoint was not found', () => {
        const serviceName = 'myCustomService';

        expect(() => {
            getServiceClientEndpoint({ serviceName } as unknown as MockServiceClientCtor);
        }).toThrow(`Endpoint for service ${serviceName} is no defined`);
    });

    it('should throw exception if client class has no serviceName option', () => {
        expect(() => {
            getServiceClientEndpoint({} as unknown as MockServiceClientCtor);
        }).toThrow('Unable to retrieve serviceName of provided service client class');
    });
});
