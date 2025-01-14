import * as fs from 'fs';
import * as PATH from 'path';
import * as fg from 'fast-glob';
import { detectRootServices, writeToFile } from '../detect_services';

import { promisify } from 'node:util';
import child_process from 'node:child_process';
import { uniq } from 'lodash';

const exec = promisify(child_process.exec);

const PROTO_DIR = PATH.resolve('./cloudapi');
const YANDEX_CLOUD_DIR = PATH.join(PROTO_DIR, 'yandex', 'cloud');
const CLIENTS_DIR = PATH.resolve('./clients');

const generateServiceName = (dir: string) => {
    return dir.split('/').join('-');
};

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

const addReExportsForService = async (
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
        const originProtoSource = `./generated/yandex/cloud/${serviceDir}/${pathStr}`;
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

const initTsConfig = async (absoluteServiceDir: string, serviceName: string) => {
    const pathStr = PATH.join(absoluteServiceDir, 'tsconfig.json');

    const content = {
        extends: '../tsconfig',
        compilerOptions: {
            outDir: `../../${serviceName}`,
        },
        include: ['.'],
    };

    fs.writeFileSync(pathStr, JSON.stringify(content, null, 2), 'utf8');
};

const generateService = async (dir: string) => {
    const target = PATH.join(YANDEX_CLOUD_DIR, dir);

    const serviceProtoFiles = fg.sync('**/*.proto', { cwd: target, absolute: true });

    const serviceName = generateServiceName(dir);

    const serviceDir = PATH.join(CLIENTS_DIR, serviceName);
    const generatedCodeDir = PATH.join(serviceDir, 'generated');

    if (!fs.existsSync(generatedCodeDir)) {
        fs.mkdirSync(generatedCodeDir, { recursive: true });
    }

    const commandArgs = [
        'npx --no-install grpc_tools_node_protoc',
        `--ts_proto_out=${generatedCodeDir}`,
        '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
        `-I ${PROTO_DIR} -I ${PROTO_DIR}/third_party/googleapis`,
        serviceProtoFiles.join(' '),
    ];
    const command = commandArgs.join(' ');

    await exec(command);

    const relativeProtoPathList = serviceProtoFiles.map((pathStr) => {
        return PATH.relative(target, pathStr);
    });

    await Promise.all([
        addReExportsForService(serviceDir, dir, relativeProtoPathList),
        initTsConfig(serviceDir, serviceName),
    ]);

    return serviceName;
};

const START_SIGN = '# generate_services start';

const modifyGitignore = async (serviceList: string[]) => {
    const path = PATH.resolve('.gitignore');
    const content = fs.readFileSync(path, 'utf8');

    const startIdx = content.indexOf(START_SIGN);
    const endIdx = content.indexOf('# generate_services end');

    let newContent = content.substring(0, startIdx + START_SIGN.length + 1);

    serviceList.forEach((service) => {
        newContent += `/${service}\n`;
    });

    newContent += content.substring(endIdx);

    fs.writeFileSync(path, newContent, 'utf8');
};

const modifyPackageJSON = async (serviceList: string[]) => {
    const path = PATH.resolve('package.json');
    const data = fs.readFileSync(path, 'utf8');
    const jsonData = JSON.parse(data);

    jsonData.exports = jsonData.exports || {};
    jsonData.files = jsonData.files || [];

    serviceList.forEach((serviceName) => {
        jsonData.exports[`./${serviceName}`] = `./${serviceName}/index.js`;
        jsonData.exports[`./${serviceName}/*`] = `./${serviceName}/*.js`;
        jsonData.files.push(serviceName);
    });

    jsonData.files.sort();
    jsonData.files = uniq(jsonData.files);

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

    const serviceList = await Promise.all(Object.keys(serviceMap).map(generateService));

    serviceList.sort();

    await Promise.all([modifyGitignore(serviceList), modifyPackageJSON(serviceList)]);

    await exec('npm run prettier:fix:clients');
};

if (require.main === module) {
    main();
}
