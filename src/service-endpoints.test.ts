import { ServiceEndpointResolver } from './service-endpoints';
import { serviceClients } from '.';
import { GeneratedServiceClientCtor } from './types';

// eslint-disable-next-line @typescript-eslint/ban-types
type MockServiceClientCtor = GeneratedServiceClientCtor<{}>;

const serviceEndpointResolver = new ServiceEndpointResolver();

describe('service endpoints', () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', () => {
        for (const [, ServiceClient] of Object.entries(serviceClients)) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            expect(() => {
                const endpoint = serviceEndpointResolver.resolve(ServiceClient as MockServiceClientCtor);

                expect(endpoint).toBeTruthy();
            }).not.toThrow();
        }
    });

    it('should throw exception if endpoint was not found', () => {
        const serviceName = 'myCustomService';

        expect(() => {
            serviceEndpointResolver.resolve({ serviceName } as unknown as MockServiceClientCtor);
        }).toThrow(`Endpoint for service ${serviceName} is no defined`);
    });

    it('should throw exception if client class has no serviceName option', () => {
        expect(() => {
            serviceEndpointResolver.resolve({} as unknown as MockServiceClientCtor);
        }).toThrow('Unable to retrieve serviceName of provided service client class');
    });
});
