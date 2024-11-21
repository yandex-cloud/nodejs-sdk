import path from 'path';
import fs from 'fs';

import { promisify } from 'node:util';
import child_process from 'node:child_process';

const exec = promisify(child_process.exec);

const CLIENTS_PATH = path.resolve('./clients');

const getServices = () => {
    const files = fs.readdirSync(CLIENTS_PATH, { withFileTypes: true });
    return files.filter((file) => file.isDirectory()).map((file) => file.name);
};

const buildService = async (serviceName: string) => {
    await exec(
        `cross-env NODE_OPTIONS="--max-old-space-size=4096" tsc -p ${CLIENTS_PATH}/${serviceName}`,
    );
};

(async () => {
    const serviceList = getServices();

    await Promise.all(serviceList.map(buildService));
})();
