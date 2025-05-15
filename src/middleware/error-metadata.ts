import { CallOptions, ClientMiddleware, Metadata } from 'nice-grpc';
import { rethrowAbortError } from 'abort-controller-x';
import { ApiError } from '../errors';

export const errorMetadataMiddleware: ClientMiddleware = async function* errorMetadataMiddleware(
    call,
    options,
) {
    let md: Metadata | undefined;
    const { onHeader } = options;
    const callOptions: CallOptions = {
        ...options,
        onHeader: (header: Metadata) => {
            md = header;
            if (onHeader !== undefined) {
                onHeader(header);
            }
        },
    };

    try {
        return yield* call.next(call.request, callOptions);
    } catch (error: unknown) {
        rethrowAbortError(error);
        if (error instanceof Error && md !== undefined) {
            throw new ApiError(error, md);
        }

        throw error;
    }
};
