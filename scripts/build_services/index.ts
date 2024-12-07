import path from 'path';
import fs from 'fs';

import { exec } from 'child_process';

const CLIENTS_PATH = path.resolve('./clients');

const getServices = () => {
    const files = fs.readdirSync(CLIENTS_PATH, { withFileTypes: true });
    return files.filter((file) => file.isDirectory()).map((file) => file.name);
};

const buildService = (serviceName: string) => {
    exec(`NODE_OPTIONS="--max-old-space-size=4096" tsc -p ${CLIENTS_PATH}/${serviceName}`);
};

(async () => {
    const serviceList = getServices();
    serviceList.forEach(buildService);
})();
