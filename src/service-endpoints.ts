import { ServiceClientConstructor, ServiceDefinition } from '@grpc/grpc-js';
import { GeneratedServiceClientCtor } from './types';

import SERVICE_ENDPOINTS_MAP from './service-endpoints-map.json';

export const getServiceClientEndpoint = <T extends ServiceDefinition>(
    generatedClientCtor: GeneratedServiceClientCtor<T>,
): string => {
    const clientCtor = generatedClientCtor as unknown as ServiceClientConstructor;
    const serviceName: string = clientCtor.serviceName as string;

    if (!serviceName) {
        throw new Error('Unable to retrieve serviceName of provided service client class');
    }

    const endpoint = (SERVICE_ENDPOINTS_MAP as Record<string, string | undefined>)[serviceName];

    if (!endpoint) {
        // @see https://api.cloud.yandex.net/endpoints
        throw new Error(`Endpoint for service ${serviceName} is no defined`);
    }

    return endpoint;
};
