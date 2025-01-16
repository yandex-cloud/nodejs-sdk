import { ClientFactory, createClientFactory } from 'nice-grpc';
import { deadlineMiddleware, DeadlineOptions } from 'nice-grpc-client-middleware-deadline';
import { retryMiddleware, RetryOptions } from '../middleware/retry';
import { errorMetadataMiddleware } from '../middleware/error-metadata';

export type ClientCallArgs = RetryOptions | DeadlineOptions;

export const clientFactory: ClientFactory<ClientCallArgs> = createClientFactory()
    .use(errorMetadataMiddleware)
    .use(retryMiddleware)
    .use(deadlineMiddleware);
