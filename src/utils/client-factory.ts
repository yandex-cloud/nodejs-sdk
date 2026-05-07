import { ClientFactory, ClientMiddleware, createClientFactory } from 'nice-grpc';
import { deadlineMiddleware, DeadlineOptions } from 'nice-grpc-client-middleware-deadline';
import { retryMiddleware, RetryOptions } from '../middleware/retry';
import { errorMetadataMiddleware } from '../middleware/error-metadata';

export type ClientCallArgs = RetryOptions & DeadlineOptions;

export const buildClientFactory = (
    extraMiddlewares: ClientMiddleware[] = [],
): ClientFactory<ClientCallArgs> => {
    let factory: ClientFactory<ClientCallArgs> = createClientFactory()
        .use(errorMetadataMiddleware)
        .use(retryMiddleware)
        .use(deadlineMiddleware);

    for (const mw of extraMiddlewares) {
        factory = factory.use(mw) as ClientFactory<ClientCallArgs>;
    }

    return factory;
};

export const clientFactory: ClientFactory<ClientCallArgs> = buildClientFactory();
