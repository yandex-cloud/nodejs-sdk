import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as fg from 'fast-glob';

import { logger } from '../src/utils/logger';
import { servicesConfig } from './services';

import { exportAliasExceptions } from './exceptions';

const GENERATED_CODE_DIR = path.resolve('./src/generated');
const GENERATED_PROJECTS_DIR = path.join(GENERATED_CODE_DIR, 'yandex', 'cloud');
const PROTO_DIR = path.resolve('./cloudapi');
const YA_PROTO_DIR = path.join(PROTO_DIR, 'yandex');

logger.debug(`Recreating ${GENERATED_CODE_DIR} directory`);

fs.rmSync(GENERATED_CODE_DIR, { recursive: true, force: true });
fs.mkdirSync(GENERATED_CODE_DIR);

const protoFiles = fg.sync('**/*.proto', { cwd: YA_PROTO_DIR, absolute: true });

logger.debug(`Found ${protoFiles.length} proto files in ${YA_PROTO_DIR} directory`);

const commandArgs = [
    'npx --no-install grpc_tools_node_protoc',
    `--ts_proto_out=${GENERATED_CODE_DIR}`,
    '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
    `-I ${PROTO_DIR} -I ${PROTO_DIR}/third_party/googleapis`,
    protoFiles.join(' '),
];
const command = commandArgs.join(' ');

logger.debug(`Code generation command: \n ${command}`);

cp.execSync(command);

const projectsDirs = fg.sync('*', {
    cwd: GENERATED_PROJECTS_DIR,
    onlyDirectories: true,
    absolute: true,
});

logger.debug(`Found ${projectsDirs.length} project directories`, projectsDirs);

interface ServiceMeta {
    name: string;
    exportAlias: string;
}

interface ProjectMeta {
    name: string;
    services: ServiceMeta[];
}

const projectsMeta: Record<string, ProjectMeta> = {};

const getExportAlias = (relativePath: string) =>
    exportAliasExceptions[relativePath] ||
    relativePath
        .split(path.sep)
        .filter((str) => str !== 'v1')
        .join('_');

for (const projectDir of projectsDirs) {
    logger.debug(`Processing project directory ${projectDir}`);

    const projectName = path.basename(projectDir);
    const projectModules = fg
        .sync('**/*.ts', { cwd: projectDir, absolute: true })
        // Exclude alpha versions
        .filter((serviceModule) => !/v\d+alpha/.test(serviceModule));

    logger.debug(`Found ${projectModules.length} modules`, projectModules);

    if (projectModules.length > 0) {
        logger.debug('Generating export statements');

        const indexModulePath = path.join(projectDir, 'index.ts');

        projectsMeta[indexModulePath] = {
            name: projectName,
            services: [],
        };

        const exportStatements = projectModules.map((modulePath) => {
            const relativePath = path.relative(projectDir, modulePath).replace('.ts', '');

            const exportAlias = getExportAlias(relativePath);

            if (relativePath.endsWith('_service')) {
                const name = path.basename(modulePath);

                projectsMeta[indexModulePath].services.push({
                    name,
                    exportAlias,
                });
            }

            return `export * as ${exportAlias} from './${relativePath}'`;
        });

        const indexModuleContent = exportStatements.join('\n');

        logger.debug(`Writing export statements to ${indexModulePath} module`, indexModuleContent);

        fs.writeFileSync(indexModulePath, indexModuleContent, 'utf8');
    }
}

logger.debug('Generating root index module');

const rootIndexModulePath = path.join(GENERATED_PROJECTS_DIR, 'index.ts');
const serviceClientsModulePath = path.join(GENERATED_PROJECTS_DIR, 'service_clients.ts');
const rootModuleContentParts: string[] = [];
const serviceClientsModuleContentParts: string[] = ["import * as cloudApi from '.'"];

const serviceClientsExportsSet = new Set<string>();

for (const [indexModulePath, projectMeta] of Object.entries(projectsMeta)) {
    logger.debug(`Processing ${indexModulePath} module`);
    const relativePath = path
        .relative(GENERATED_PROJECTS_DIR, indexModulePath)
        .replace('index.ts', '');

    rootModuleContentParts.push(`export * as ${projectMeta.name} from './${relativePath}'`);

    for (const serviceMeta of projectMeta.services) {
        const serviceConfig = servicesConfig[projectMeta.name]?.[serviceMeta.exportAlias];

        if (serviceConfig) {
            delete servicesConfig[projectMeta.name]?.[serviceMeta.exportAlias];

            const exportStr = `export const ${
                serviceConfig.exportClassName || serviceConfig.importClassName
            } = cloudApi.${projectMeta.name}.${serviceMeta.exportAlias}.${
                serviceConfig.importClassName
            };`;

            if (serviceClientsExportsSet.has(exportStr)) continue;

            serviceClientsModuleContentParts.push(exportStr);
            serviceClientsExportsSet.add(exportStr);
        } else {
            logger.warn(
                `There is no configuration for service ${serviceMeta.exportAlias} in project ${projectMeta.name}`,
            );
        }
    }
}

logger.debug(`Writing result to ${rootIndexModulePath} module`);
logger.debug(`Writing result to ${serviceClientsModulePath} module`);

logger.debug('\n\n\n');

for (const serviceName of Object.keys(servicesConfig)) {
    const obj = servicesConfig[serviceName];
    const keys = Object.keys(obj);

    if (keys.length > 0) {
        logger.warn(`There are unused config keys for service ${serviceName}: ${keys.join(', ')}`);
    }
}

fs.writeFileSync(rootIndexModulePath, rootModuleContentParts.join('\n'), 'utf8');
fs.writeFileSync(serviceClientsModulePath, serviceClientsModuleContentParts.join('\n'), 'utf8');
