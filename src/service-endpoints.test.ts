import { ServiceClientConstructor } from '@grpc/grpc-js';
import { getServiceClientEndpoint } from './service-endpoints';
import { serviceClients } from '.';

describe('service endpoints', () => {
    it('each service in generated service_clients module should have endpoint declared in service-endpoints', () => {
        for (const [, ServiceClient] of Object.entries(serviceClients)) {
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            expect(() => {
                const endpoint = getServiceClientEndpoint(ServiceClient);

                expect(endpoint).toBeTruthy();
            }).not.toThrow();
        }
    });

    it('should throw exception if endpoint was not found', () => {
        const serviceName = 'myCustomService';

        expect(() => {
            getServiceClientEndpoint({ options: { serviceName } } as unknown as ServiceClientConstructor);
        }).toThrow(`Endpoint for service ${serviceName} is no defined`);
    });

    it('should throw exception if client class has no serviceName option', () => {
        expect(() => {
            getServiceClientEndpoint({ options: {} } as unknown as ServiceClientConstructor);
        }).toThrow('Unable to retrieve serviceName of provided service client class');
    });
});
