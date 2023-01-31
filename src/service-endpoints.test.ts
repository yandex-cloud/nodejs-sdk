import { serviceClients } from '.';
import {
    getServiceClientEndpoint,
    SERVICE_ENDPOINTS_LIST,
} from './service-endpoints';
import { GeneratedServiceClientCtor } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
type MockServiceClientCtor = GeneratedServiceClientCtor<{}>;

const endpointResolver = async () => SERVICE_ENDPOINTS_LIST;

describe('service endpoints', async () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', () => {
        for (const [, ServiceClient] of Object.entries(serviceClients)) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            expect(() => {
                const endpoint = getServiceClientEndpoint(ServiceClient as MockServiceClientCtor, endpointResolver);

                expect(endpoint)
                    .toBeTruthy();
            })
                .not
                .toThrow();
        }
    });

    it('should throw exception if endpoint was not found', () => {
        const serviceName = 'myCustomService';

        expect(() => {
            getServiceClientEndpoint({ serviceName } as unknown as MockServiceClientCtor, endpointResolver);
        })
            .toThrow(`Endpoint for service ${serviceName} is no defined`);
    });

    it('should throw exception if client class has no serviceName option', () => {
        expect(() => {
            getServiceClientEndpoint({} as unknown as MockServiceClientCtor, endpointResolver);
        })
            .toThrow('Unable to retrieve serviceName of provided service client class');
    });
});
