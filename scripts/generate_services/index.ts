import * as fs from 'fs';
import * as PATH from 'path';
import * as fg from 'fast-glob';
import { detectRootServices, writeToFile } from '../detect_services';
import * as cp from 'child_process';

import { promisify } from 'node:util';
import child_process from 'node:child_process';

import { generateServiceName } from '../common';
import { getServiceList } from '../check-endpoints';

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

const generateCloudApi = (protoFiles: string[]) => {
    const GENERATED_CODE_DIR = PATH.resolve('./src/generated');

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

/**
 * Workaround for TS7056 ("inferred type exceeds the maximum length the
 * compiler will serialize") on large ts-proto helper objects. Adds an explicit
 * type annotation to every `export const X = { encode, decode, fromJSON,
 * toJSON, fromPartial }` so TS emits the annotation into .d.ts instead of the
 * giant inferred object literal type.
 *
 * Only annotates helpers that contain EXACTLY the five standard ts-proto
 * methods — consts with extras (e.g. `wrap`/`unwrap` on well-known types like
 * `google.protobuf.Struct`/`Value`/`ListValue`) are left untouched, since a
 * rigid annotation would reject those extra members. Such helpers are small
 * enough not to trigger TS7056 anyway.
 *
 * Idempotent: after the rewrite the original `export const X = {` opener no
 * longer matches (it becomes `export const X: { ... } = {`).
 */
const annotateHelperConsts = () => {
    const GENERATED_CODE_DIR = PATH.resolve('./src/generated');
    const files = fg.sync('**/*.ts', { cwd: GENERATED_CODE_DIR, absolute: true });

    const STANDARD_METHODS = ['encode', 'decode', 'fromJSON', 'toJSON', 'fromPartial'];
    const START_RE = /^export const (\w+) = \{$/;
    // Top-level property of a ts-proto helper: 4-space indent + identifier
    // followed by `(` (regular method) or `<` (generic method e.g.
    // `fromPartial<I extends ...>(...)`).
    const PROP_RE = /^ {4}(\w+)[<(]/;
    const END_LINE = '};';

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        const out: string[] = [];
        let modified = false;
        let i = 0;

        while (i < lines.length) {
            const m = START_RE.exec(lines[i]);
            if (!m) {
                out.push(lines[i]);
                i += 1;
                continue;
            }

            const name = m[1];

            // Find the matching `};` at column 0 (end of the top-level const).
            let j = i + 1;
            while (j < lines.length && lines[j] !== END_LINE) j += 1;
            if (j >= lines.length) {
                out.push(lines[i]);
                i += 1;
                continue;
            }

            const body = lines.slice(i + 1, j);
            const methods = new Set<string>();
            for (const line of body) {
                const pm = PROP_RE.exec(line);
                if (pm) methods.add(pm[1]);
            }

            const isStandard =
                methods.size === STANDARD_METHODS.length &&
                STANDARD_METHODS.every((s) => methods.has(s));

            if (!isStandard) {
                out.push(lines[i]);
                i += 1;
                continue;
            }

            out.push(
                `export const ${name}: {`,
                `    encode(message: ${name}, writer?: _m0.Writer): _m0.Writer;`,
                `    decode(input: _m0.Reader | Uint8Array, length?: number): ${name};`,
                `    fromJSON(object: any): ${name};`,
                `    toJSON(message: ${name}): unknown;`,
                `    fromPartial<I extends Exact<DeepPartial<${name}>, I>>(object: I): ${name};`,
                `} = {`,
            );
            out.push(...body);
            out.push(END_LINE);
            modified = true;
            i = j + 1;
        }

        if (modified) {
            fs.writeFileSync(file, out.join('\n'), 'utf8');
        }
    }
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

const generateServiceEndpointsMap = async () => {
    const serviceList = await getServiceList();

    const filePath = PATH.resolve('./src/service-endpoints-map.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data) as Record<string, string>;

    serviceList.forEach((s) => {
        // full name without leading dot
        const serviceName = s.fullName.slice(1);
        jsonData[serviceName] = jsonData[serviceName] || '';
    });

    fs.writeFile(filePath, JSON.stringify(jsonData, undefined, 2), 'utf8', (err) => {
        if (err !== null) {
            throw err;
        }

        const configPath = PATH.resolve('./.prettierrc.js');
        cp.execFileSync('npx', ['--no-install', 'prettier', filePath, '--write', '--config', configPath]);
    });
};

const main = async () => {
    const serviceMap = await detectRootServices(YANDEX_CLOUD_DIR);

    writeToFile(serviceMap);

    const YA_PROTO_DIR = PATH.join(PROTO_DIR, 'yandex');
    const protoFiles = fg.sync('**/*.proto', { cwd: YA_PROTO_DIR, absolute: true });

    await Promise.all([generateCloudApi(protoFiles), generateServiceEndpointsMap()]);

    annotateHelperConsts();

    const clientPromiseList = Object.keys(serviceMap).map(generateClient);
    const serviceDirList = await Promise.all(clientPromiseList);
    serviceDirList.sort();

    await modifyPackageJSON(serviceDirList);

    await exec('npm run prettier:fix:clients');
};

if (require.main === module) {
    main();
}
