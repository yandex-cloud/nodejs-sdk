import type { ClientMiddleware } from 'nice-grpc';

class TracingPeerNotInstalledError extends Error {
    override readonly name = 'TracingPeerNotInstalledError';

    constructor(public readonly cause: unknown) {
        super(
            'Tracing was enabled on Session, but `nice-grpc-opentelemetry` is not installed. '
            + 'Install it (and `@opentelemetry/api`) to use the `tracing` option:\n'
            + '  npm install nice-grpc-opentelemetry @opentelemetry/api',
        );
    }
}

export const loadOpenTelemetryClientMiddleware = (): ClientMiddleware => {
    let mod: { openTelemetryClientMiddleware: () => ClientMiddleware };

    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports, global-require, import/no-unresolved, unicorn/prefer-module
        mod = require('nice-grpc-opentelemetry');
    } catch (error) {
        throw new TracingPeerNotInstalledError(error);
    }

    return mod.openTelemetryClientMiddleware();
};
