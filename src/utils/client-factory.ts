import { createClientFactory } from 'nice-grpc';
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline';

export const clientFactory = createClientFactory().use(deadlineMiddleware);
