import * as fs from 'fs';
import * as PATH from 'path';
import * as fg from 'fast-glob';
import { detectRootServices, writeToFile } from '../detect_services';

import { promisify } from 'node:util';
import child_process from 'node:child_process';

import { generateServiceName } from '../common';

const exec = promisify(child_process.exec);

const PROTO_DIR = PATH.resolve('./cloudapi');
const YANDEX_CLOUD_DIR = PATH.join(PROTO_DIR, 'yandex', 'cloud');
const CLIENTS_DIR = PATH.resolve('./src/clients');

const regex = /[A-Za-z]/;
const toCamelCase = (str: string) => {
    let res = '';

    for (let i = 0; i !== str.length; i++) {
        if ((str[i] === '_' || str[i] === '/') && regex.test(str[i + 1])) {
            res += str[i + 1].toUpperCase();
            i++;
            continue;
        }

        res += str[i];
    }

    return res;
};

const addReExports = async (
    absoluteServiceDir: string,
    serviceDir: string,
    relativeProtoPathList: string[],
) => {
    const aliases = (() => {
        try {
            return JSON.parse(
                fs.readFileSync(PATH.join(absoluteServiceDir, 'export-alias.json'), 'utf8'),
            ) as Record<string, string>;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            return {} as Record<string, string>;
        }
    })();

    const getExportAsName = (pathStr: string) => {
        const pathParts = pathStr.split('/');
        const protoFile = pathParts[pathParts.length - 1];

        const exportAsName = toCamelCase(protoFile.substring(0, protoFile.indexOf('.proto')));

        return exportAsName;
    };

    const protoFileList = relativeProtoPathList.sort().map((pathStr) => {
        const originProtoSource = `../../generated/yandex/cloud/${serviceDir}/${pathStr}`;
        const tsImportSource = `${originProtoSource.substring(
            0,
            originProtoSource.indexOf('.proto'),
        )}`;

        const exportAsName = aliases[tsImportSource] || getExportAsName(pathStr);

        return { exportAsName, tsImportSource };
    });

    const indexModulePath = PATH.join(absoluteServiceDir, 'index.ts');

    const indexModuleContent = protoFileList.reduce((str, { exportAsName, tsImportSource }) => {
        str += `export * as ${exportAsName} from '${tsImportSource}';\n`;

        return str;
    }, '// generated file\n\n');

    fs.writeFileSync(indexModulePath, indexModuleContent, 'utf8');
};

const generateCloudApi = () => {
    const YA_PROTO_DIR = PATH.join(PROTO_DIR, 'yandex');
    const GENERATED_CODE_DIR = PATH.resolve('./src/generated');

    const protoFiles = fg.sync('**/*.proto', { cwd: YA_PROTO_DIR, absolute: true });

    const commandArgs = [
        'npx --no-install grpc_tools_node_protoc',
        `--ts_proto_out=${GENERATED_CODE_DIR}`,
        '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,env=node,useOptionals=messages',
        `-I ${PROTO_DIR} -I ${PROTO_DIR}/third_party/googleapis`,
        protoFiles.join(' '),
    ];

    const command = commandArgs.join(' ');

    return exec(command);
};

const generateClient = async (dir: string) => {
    const target = PATH.join(YANDEX_CLOUD_DIR, dir);

    const serviceProtoFiles = fg.sync('**/*.proto', { cwd: target, absolute: true });

    const serviceDir = PATH.join(CLIENTS_DIR, generateServiceName(dir));
    if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
    }

    const relativeProtoPathList = serviceProtoFiles.map((pathStr) => {
        return PATH.relative(target, pathStr);
    });

    await addReExports(serviceDir, dir, relativeProtoPathList);

    return dir;
};

const modifyPackageJSON = async (serviceDirList: string[]) => {
    const path = PATH.resolve('package.json');
    const data = fs.readFileSync(path, 'utf8');
    const jsonData = JSON.parse(data);

    jsonData.exports = jsonData.exports || {};

    serviceDirList.forEach((serviceDir) => {
        const serviceName = generateServiceName(serviceDir);
        jsonData.exports[`./${serviceName}`] = `./dist/clients/${serviceName}/index.js`;
        jsonData.exports[`./${serviceName}/*`] = `./dist/generated/yandex/cloud/${serviceDir}/*.js`;
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const replacer = (key: string, value: any) => {
        return value && typeof value === 'object' && key === 'exports'
            ? Object.keys(value)
                  .sort()
                  .reduce((sorted, key) => {
                      sorted[key] = value[key];
                      return sorted;
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  }, {} as any)
            : value;
    };

    fs.writeFileSync(path, JSON.stringify(jsonData, replacer, 2) + '\n', 'utf8');
};

const main = async () => {
    const serviceMap = await detectRootServices(YANDEX_CLOUD_DIR);

    writeToFile(serviceMap);

    await generateCloudApi();

    const clientPromiseList = Object.keys(serviceMap).map(generateClient);
    const serviceDirList = await Promise.all(clientPromiseList);
    serviceDirList.sort();

    await modifyPackageJSON(serviceDirList);

    await exec('npm run prettier:fix:clients');
};

if (require.main === module) {
    main();
}
