import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { Session } from '@yandex-cloud/nodejs-sdk';
import { cloudService } from '@yandex-cloud/nodejs-sdk/resourcemanager-v1';
import { getEnv } from './utils/get-env';
import { log } from './utils/logger';

const IAM_TOKEN = getEnv('YC_IAM_TOKEN');

const provider = new NodeTracerProvider({
    spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())],
});

provider.register();

(async () => {
    const session = new Session({ iamToken: IAM_TOKEN, tracing: true });
    const client = session.client(cloudService.CloudServiceClient);

    const response = await client.list(
        cloudService.ListCloudsRequest.fromPartial({ pageSize: 200 }),
    );

    for (const cloud of response.clouds) {
        log(`Found cloud id = ${cloud.id}, name = ${cloud.name}`);
    }

    await provider.shutdown();
})();
