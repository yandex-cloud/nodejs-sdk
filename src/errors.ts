import { Metadata } from 'nice-grpc';

export class ApiError extends Error {
    metadata: Metadata;

    constructor(error: Error, metadata: Metadata) {
        super(error.message);
        this.name = 'ApiError';
        this.stack = error.stack;
        this.metadata = metadata;
    }

    /**
     * Getter for the request ID from the metadata.
     * Will provide additional information in case of opening a support ticket.
     * @returns {string | undefined} The request ID if it exists, undefined otherwise.
     */
    get requestId(): string | undefined {
        return this.metadata.get('x-request-id');
    }

    /**
     * Getter for the server trace ID from the metadata.
     * Will provide additional information in case of opening a support ticket.
     * @returns {string | undefined} The server trace ID if it exists, undefined otherwise.
     */
    get serverTraceId(): string | undefined {
        return this.metadata.get('x-server-trace-id');
    }
}
