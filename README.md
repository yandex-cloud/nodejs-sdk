# Yandex.Cloud SDK (nodejs)

[![npm](https://img.shields.io/npm/v/@yandex-cloud/nodejs-sdk.svg)](https://www.npmjs.com/package/@yandex-cloud/nodejs-sdk)
[![License](https://img.shields.io/github/license/yandex-cloud/nodejs-sdk.svg)](https://github.com/yandex-cloud/nodejs-sdk/blob/master/LICENSE)

Need to automate your infrastructure or use services provided by Yandex.Cloud? We've got you covered.

## Requirements
- nodejs >= 18

## Installation
`npm install @yandex-cloud/nodejs-sdk`

## Getting started

There are three options for authorization your requests:
- [OAuth Token](https://cloud.yandex.com/en-ru/docs/iam/concepts/authorization/oauth-token)
- [IAM token](https://cloud.yandex.com/en-ru/docs/iam/operations/iam-token/create)
- [Metadata Service](https://cloud.yandex.com/en-ru/docs/compute/concepts/vm-metadata) (if you're executing code inside VMs or Functions
running in Yandex.Cloud)

### OAuth Token

```typescript
import { Session } from '@yandex-cloud/nodejs-sdk';
import { cloudService } from '@yandex-cloud/nodejs-sdk/resourcemanager-v1';

// Initialize SDK with your token
const session = new Session({ oauthToken: 'YOUR_TOKEN' });

// Create service client
const cloudServiceClient = session.client(cloudService.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudServiceClient.list(cloudService.ListCloudsRequest.fromPartial({
    pageSize: 100,
}));
```

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

Check [examples](./examples) directory for more examples.

To run example scripts, you should execute the following commands:
```bash
cd examples
npm i
YC_OAUTH_TOKEN=... YC_FOLDER_ID=... npm run start path/to/example.ts
```

P.S If you need generated client for other Yandex.Cloud services, just open an issue.
