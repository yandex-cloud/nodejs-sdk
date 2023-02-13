import { createClientFactory } from 'nice-grpc';
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline';
import { retryMiddleware } from 'nice-grpc-client-middleware-retry';

export const clientFactory = createClientFactory()
    .use(retryMiddleware)
    .use(deadlineMiddleware);
