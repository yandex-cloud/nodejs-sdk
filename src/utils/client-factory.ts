import { createClientFactory } from 'nice-grpc';
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline';
import { errorMetadataMiddleware } from '../middleware/error-metadata';

export const clientFactory = createClientFactory()
    .use(errorMetadataMiddleware)
    .use(deadlineMiddleware);
