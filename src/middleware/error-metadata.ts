import { CallOptions, ClientMiddleware, Metadata } from 'nice-grpc';
import { rethrowAbortError } from 'abort-controller-x';
import { ApiError } from '../errors';

export const errorMetadataMiddleware: ClientMiddleware = async function* errorMetadataMiddleware(
    call,
) {
    let md: Metadata | undefined;

    const options: CallOptions = {
        onHeader: (header: Metadata) => {
            md = header;
        },
    };

    try {
        return yield* call.next(call.request, options);
    } catch (error: unknown) {
        rethrowAbortError(error);
        if (error instanceof Error && md !== undefined) {
            throw new ApiError(error, md);
        }

        throw error;
    }
};
