import * as cp from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as fg from 'fast-glob';
import { detectRootServices, writeToFile } from '../detect_services';

const PROTO_DIR = path.resolve('./cloudapi');
const YANDEX_CLOUD_DIR = path.join(PROTO_DIR, 'yandex', 'cloud');
const CLIENTS_DIR = path.resolve('./clients');

const generateServiceName = (dir: string) => {
    return dir.split('/').join('-');
};

const generateService = async (dir: string) => {
    const target = path.join(PROTO_DIR, 'yandex', 'cloud', dir);

    const protoFiles = fg.sync('**/*.proto', { cwd: target, absolute: true });

    const serviceName = generateServiceName(dir);

    const generatedCodeDir = path.join(CLIENTS_DIR, serviceName, 'generated');

    if (!fs.existsSync(generatedCodeDir)) {
        fs.mkdirSync(generatedCodeDir, { recursive: true });
    }

    const commandArgs = [
        'npx --no-install grpc_tools_node_protoc',
        `--ts_proto_out=${generatedCodeDir}`,
        '--ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true,env=node,useOptionals=messages',
        `-I ${PROTO_DIR} -I ${PROTO_DIR}/third_party/googleapis`,
        protoFiles.join(' '),
    ];
    const command = commandArgs.join(' ');

    cp.execSync(command);
};

const main = async () => {
    const serviceMap = await detectRootServices(YANDEX_CLOUD_DIR);

    writeToFile(serviceMap);

    await Promise.all(Object.keys(serviceMap).map(generateService));
};

if (require.main === module) {
    main();
}
