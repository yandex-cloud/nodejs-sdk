# Yandex.Cloud NodeJS SDK

[![npm](https://img.shields.io/npm/v/@yandex-cloud/sdk.svg)](https://www.npmjs.com/package/@yandex-cloud/sdk)
[![Build Status](https://travis-ci.com/yandex-cloud/nodejs-sdk.svg?branch=master)](https://travis-ci.com/yandex-cloud/nodejs-sdk)
[![License](https://img.shields.io/github/license/yandex-cloud/nodejs-sdk.svg)](https://github.com/yandex-cloud/nodejs-sdk/blob/master/LICENSE)

**This is a Technical Preview version. There are no guarantees on API compatibility.**

Need to automate your infrastructure or use services provided by Yandex.Cloud? We've got you covered.

Installation:

    npm install @yandex-cloud/sdk --save

Library requires at least NodeJS 10 and provides TypeScript declarations.

## Getting started

First of all, you need to have an account in Yandex.Cloud and issue OAuth token.

    const yc = require('@yandex-cloud/sdk');
    const resourceManager = require('@yandex-cloud/sdk/api/resourcemanager/v1');
    
    // Initialize SDK
    let session = new yc.Session({ oauthToken: 'YOUR_TOKEN' });
    
    // Create service client
    let cloudService = await session.client(resourceManager.CloudService);
    
    // Issue request (returns Promise)
    let response = await cloudService.list({});
    
Check `examples` directory for more examples.

## Services

* Resource Manager;
* Identity and Access Management (IAM);
* Compute;
* Container Registry;
* Managed Services for Kubernetes;
* Load Balancer;
* Serverless Functions;
* Virtual Private Cloud (VPC);
* AI Translate;
* AI Vision.

If you need client for other Yandex.Cloud services, just open an issue.
