# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Yandex Cloud Node.js SDK (`@yandex-cloud/nodejs-sdk`). Provides typed gRPC clients for all Yandex Cloud services, generated from protobuf definitions in the `cloudapi` git submodule.

## Commands

- **Build:** `npm run build` (compiles TypeScript to `dist/`)
- **Lint:** `npm run lint` (ESLint on `src` and `config`)
- **Test:** `npm test` (runs Jest; auto-generates services first)
- **Single test:** `cross-env NODE_OPTIONS="--max-old-space-size=8192" node --experimental-vm-modules node_modules/jest/bin/jest.js -c config/jest.ts --passWithNoTests 'path/to/test'`
- **Typecheck:** `npm run typecheck` (checks both src and examples)
- **Generate services from protos:** `npm run cloudapi:generate-services`
- **Update cloudapi submodule:** `npm run cloudapi:update`

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint via husky hook). Semantic-release publishes from `master`, `beta`, and `alpha` branches.

## Architecture

### Code generation pipeline

The `cloudapi` submodule contains `.proto` files from `github.com/yandex-cloud/cloudapi`. The `scripts/generate_services` script:
1. Runs `ts-proto` via `grpc_tools_node_protoc` to generate TypeScript types/clients into `src/generated/`
2. Detects service directories and creates re-export `index.ts` files in `src/clients/<service-name>/`
3. Updates `package.json` exports map so each service is importable as `@yandex-cloud/nodejs-sdk/<service-name>`

**Do not edit files in `src/generated/` or `src/clients/*/index.ts` manually** — they are overwritten by code generation. Client directories may contain an `export-alias.json` for custom export names.

### Session and client creation

`Session` (`src/session.ts`) is the main entry point. It handles authentication (OAuth, IAM token, service account JSON, or metadata service) and creates gRPC channels with credentials. Clients are obtained via `session.client(ServiceClient)`, which resolves endpoints from `src/service-endpoints-map.json`.

### Middleware stack

The client factory (`src/utils/client-factory.ts`) chains three `nice-grpc` middlewares:
1. **errorMetadataMiddleware** — wraps errors into `ApiError` with request/trace IDs from gRPC metadata
2. **retryMiddleware** — exponential backoff retry for idempotent/configured calls
3. **deadlineMiddleware** — from `nice-grpc-client-middleware-deadline`

### Service endpoint resolution

`src/service-endpoints.ts` maps a gRPC service's `serviceName` to its API endpoint using `src/service-endpoints-map.json`. The map is updated by the generation script via `scripts/check-endpoints.ts` which queries `https://api.cloud.yandex.net/endpoints`.

### Key types

- `SessionConfig` — union of credential configs (OAuth, IAM token, service account, generic/metadata)
- `WrappedServiceClientType<S>` — nice-grpc `RawClient` with retry + deadline call options
- `ClientCallArgs` — `RetryOptions & DeadlineOptions`, passed per-call
- `ApiError` — extends `Error` with gRPC metadata (`requestId`, `serverTraceId`)