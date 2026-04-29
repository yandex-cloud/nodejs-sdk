# Yandex.Cloud SDK (nodejs)

[![npm](https://img.shields.io/npm/v/@yandex-cloud/nodejs-sdk.svg)](https://www.npmjs.com/package/@yandex-cloud/nodejs-sdk)
[![License](https://img.shields.io/github/license/yandex-cloud/nodejs-sdk.svg)](https://github.com/yandex-cloud/nodejs-sdk/blob/master/LICENSE)

Need to automate your infrastructure or use services provided by Yandex.Cloud? We've got you covered.

## Requirements
- nodejs >= 22.15

## Installation
`npm install @yandex-cloud/nodejs-sdk`

## Getting started

There are three options for authorization your requests:
- [IAM token](https://cloud.yandex.com/en-ru/docs/iam/operations/iam-token/create)
- [Metadata Service](https://cloud.yandex.com/en-ru/docs/compute/concepts/vm-metadata) (if you're executing code inside VMs or Functions
running in Yandex.Cloud)


### Metadata Service

Don't forget to assign Service Account for your Instance or Function.

```typescript
import { Session} from '@yandex-cloud/nodejs-sdk';
import { cloudService } from '@yandex-cloud/nodejs-sdk/resourcemanager-v1';

// Initialize SDK with your token
const session = new Session();

// Create service client
const cloudServiceClient = session.client(cloudService.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudServiceClient.list(cloudService.ListCloudsRequest.fromPartial({
    pageSize: 100,
}));
```

### IAM Token

```typescript
import { Session } from '@yandex-cloud/nodejs-sdk';
import { cloudService } from '@yandex-cloud/nodejs-sdk/resourcemanager-v1';

// Initialize SDK with your token
const session = new Session({ iamToken: 'YOUR_TOKEN' });

// Create service client
const cloudServiceClient = session.client(cloudService.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudServiceClient.list(cloudService.ListCloudsRequest.fromPartial({
    pageSize: 100,
}));
```

### Tracing (OpenTelemetry)

The SDK can wrap every gRPC call in an OpenTelemetry span via [`nice-grpc-opentelemetry`](https://www.npmjs.com/package/nice-grpc-opentelemetry).
Install the peer packages and pass `tracing: true`:

```bash
npm install @opentelemetry/api nice-grpc-opentelemetry
```

```typescript
import { Session } from '@yandex-cloud/nodejs-sdk';

const session = new Session({ iamToken: 'YOUR_TOKEN', tracing: true });
```

A span is produced per RPC attempt (i.e. inside the SDK's retry loop), and trace context is propagated via gRPC metadata using the OpenTelemetry global propagator.
See [`examples/opentelemetry.ts`](./examples/opentelemetry.ts) for a runnable end-to-end setup.

Check [examples](./examples) directory for more examples.

To run example scripts, you should execute the following commands:
```bash
cd examples
npm i
YC_IAM_TOKEN=... YC_FOLDER_ID=... npm run start path/to/example.ts
```

P.S If you need generated client for other Yandex.Cloud services, just open an issue.
