# Yandex.Cloud SDK (nodejs)

[![npm](https://img.shields.io/npm/v/@yandex-cloud/nodejs-sdk.svg)](https://www.npmjs.com/package/@yandex-cloud/nodejs-sdk)
[![License](https://img.shields.io/github/license/yandex-cloud/nodejs-sdk.svg)](https://github.com/yandex-cloud/nodejs-sdk/blob/master/LICENSE)

Need to automate your infrastructure or use services provided by Yandex.Cloud? We've got you covered.

## Requirements
- nodejs >= 12

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
import { Session, cloudApi, serviceClients } from '@yandex-cloud/nodejs-sdk';

const { resourcemanager: { cloud_service: { ListCloudsRequest } } } = cloudApi;

// Initialize SDK with your token
const session = new Session({ oauthToken: 'YOUR_TOKEN' });

// Create service client
const cloudService = session.client(serviceClients.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudService.list(ListCloudsRequest.fromPartial({
    pageSize: 100,
}));
```

### Metadata Service

Don't forget to assign Service Account for your Instance or Function.

```typescript
import { Session, cloudApi, serviceClients } from '@yandex-cloud/nodejs-sdk';

const { resourcemanager: { cloud_service: { ListCloudsRequest } } } = cloudApi;

// Initialize SDK with your token
const session = new Session();

// Create service client
const cloudService = session.client(serviceClients.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudService.list(ListCloudsRequest.fromPartial({
    pageSize: 100,
}));
```

### IAM Token

```typescript
import { Session, cloudApi, serviceClients } from '@yandex-cloud/nodejs-sdk';

const { resourcemanager: { cloud_service: { ListCloudsRequest } } } = cloudApi;

// Initialize SDK with your token
const session = new Session({ iamToken: 'YOUR_TOKEN' });

// Create service client
const cloudService = session.client(serviceClients.CloudServiceClient);

// Issue request (returns Promise)
const response = await cloudService.list(ListCloudsRequest.fromPartial({
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

## Services

* AI Translate;
* AI Vision.
* Application Load Balancer
* Billing
* Cloud CDN
* Certificate Manager
* Compute Cloud
* Container Registry
* Data Proc
* DataSphere
* Data Transfer
* DNS
* Identity and Access Management (IAM)
* IoT Core
* Managed Service for Kubernetes
* Key Management Service (KMS)
* Load Balancer
* Lockbox
* Logging
* Managed DataBase
  * ClickHouse
  * ElasticSearch
  * Greenplum
  * Kafka
  * MongoDB
  * MySQL
  * PostgreSQL
  * Redis
  * MS SQL Server
* Organization Manager
* Resource Manager
* Serverless
  * Functions
  * API Gateway
  * Containers
  * Triggers
  * MDB Proxy
* Virtual Private Cloud (VPC)
* Yandex Database (YDB)

If you need generated client for other Yandex.Cloud services, just open an issue.
