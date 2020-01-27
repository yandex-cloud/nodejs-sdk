# Yandex.Cloud SDK (node.js)

[![npm](https://img.shields.io/npm/v/yandex-cloud.svg)](https://www.npmjs.com/package/yandex-cloud)
[![CircleCI](https://img.shields.io/circleci/build/gh/yandex-cloud/nodejs-sdk/master)](https://circleci.com/gh/yandex-cloud/nodejs-sdk/tree/master)
[![License](https://img.shields.io/github/license/yandex-cloud/nodejs-sdk.svg)](https://github.com/yandex-cloud/nodejs-sdk/blob/master/LICENSE)

Need to automate your infrastructure or use services provided by Yandex.Cloud? We've got you covered.

Installation:

    npm install yandex-cloud

Library requires at least node.js 10 and provides TypeScript declarations.

## Getting started

There are two options for authorization your requests - OAuth Token
and Metadata Service (if you're executing code inside VMs or Functions
running in Yandex.Cloud)

### OAuth Token

```javascript
const {Session}      = require('yandex-cloud');
const {CloudService} = require('yandex-cloud/api/resourcemanager/v1');

// Initialize SDK with your token
const session = new Session({ oauthToken: 'YOUR_TOKEN' });

// Create service client
const cloudService = new CloudService(session);

// Issue request (returns Promise)
let response = await cloudService.list({});
```

### Metadata Service

Don't forget to assign Service Account for your Instance or Function.

```javascript
const {CloudService} = require('yandex-cloud/api/resourcemanager/v1');

// Create service client (auth token will be fetched from metadata service
const cloudService = new CloudService();

// Issue request (returns Promise)
let response = await cloudService.list({});
```

### IAM Token

```javascript
const {Session}      = require('yandex-cloud');
const {CloudService} = require('yandex-cloud/api/resourcemanager/v1');

// Initialize SDK with your token
const session = new Session({ iamToken: 'YOUR_TOKEN' });

// Create service client
const cloudService = new CloudService(session);

// Issue request (returns Promise)
let response = await cloudService.list({});
```

Check `examples` directory for more examples.

## Services

* Resource Manager;
* Identity and Access Management (IAM);
* Compute Cloud;
* Container Registry;
* Managed Services for Kubernetes;
* Key Management Service (KMS);
* Load Balancer;
* Cloud Functions;
* Virtual Private Cloud (VPC);
* AI Translate;
* AI Vision.

If you need generated client for other Yandex.Cloud services, just open an issue.
