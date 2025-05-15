import { getServiceClientEndpoint } from './service-endpoints';
import { GeneratedServiceClientCtor } from './types';
import SERVICE_ENDPOINTS_MAP from './service-endpoints-map.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockServiceClientCtor = GeneratedServiceClientCtor<any>;

describe('service endpoints', () => {
    it('no empty endpoints', async () => {
        const missedEndpointsList: string[] = [];

        Object.keys(SERVICE_ENDPOINTS_MAP).forEach((service) => {
            const endpoint = (SERVICE_ENDPOINTS_MAP as Record<string, string | undefined>)[service];
            if (!endpoint) missedEndpointsList.push(service);
        });

        if (missedEndpointsList.length !== 0) {
            throw `\nMissed endpoints in service-endpoints-map.json:\n${missedEndpointsList.join(
                '\n',
            )}\n`;
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
