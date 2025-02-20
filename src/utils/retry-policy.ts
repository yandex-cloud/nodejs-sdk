import { ChannelOptions, Status } from 'nice-grpc';

interface Policy {
    methodConfig: MethodConfig[];
    retryThrottling: RetryThrottling;
    waitForReady: boolean;
}

interface MethodConfig {
    name: NameConfig[];
    retryPolicy: RetryPolicyConfig;
}

interface NameConfig {
    service?: string;
    method?: string;
}

interface RetryPolicyConfig {
    maxAttempts: number;
    initialBackoff: string;
    maxBackoff: string;
    backoffMultiplier: number;
    retryableStatusCodes: string[];
}

interface RetryThrottling {
    maxTokens: number;
    tokenRatio: number;
}

export interface RetryConfig {
    maxAttempts?: number;
    retryableStatusCodes?: Status[];
}

export class RetryPolicy {
    private readonly config: Policy;

    constructor({ maxAttempts = 4, retryableStatusCodes = [Status.UNAVAILABLE] }: RetryConfig) {
        this.config = {
            methodConfig: [
                {
                    name: [{ service: '' }],
                    retryPolicy: {
                        maxAttempts,
                        initialBackoff: '1s',
                        maxBackoff: '20s',
                        backoffMultiplier: 2,
                        retryableStatusCodes: retryableStatusCodes.map((it) => Status[it]),
                    },
                },
            ],
            retryThrottling: {
                maxTokens: 100,
                tokenRatio: 0.1,
            },
            waitForReady: true,
        };
    }

    toJSON(): string {
        console.log(JSON.stringify(this.config));

        return JSON.stringify(this.config);
    }

    toChannelOptions(): ChannelOptions {
        return {
            'grpc.service_config': this.toJSON(),
        };
    }
}
