import { readFile } from '../scripts/detect_services';
import { getServiceClientEndpoint } from './service-endpoints';
import { GeneratedServiceClientCtor } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockServiceClientCtor = GeneratedServiceClientCtor<any>;

describe('service endpoints', () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', async () => {
        const serviceMap = await readFile();

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [dir, { serviceName }] of Object.entries(serviceMap)) {
            const client = await import(`./clients/${serviceName}`);

            const detectedServices = Object.keys(client).filter((importKey) =>
                importKey.endsWith('Service'),
            );

            detectedServices.forEach((detectedService) => {
                Object.keys(client[detectedService]).forEach((clientExportKey) => {
                    if (clientExportKey.endsWith('ServiceClient')) {
                        expect(() => {
                            const endpoint = getServiceClientEndpoint({
                                serviceName: client[detectedService][clientExportKey].serviceName,
                            } as unknown as MockServiceClientCtor);

                            expect(endpoint).toBeTruthy();
                        }).not.toThrow();
                    }
                });
            });
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
