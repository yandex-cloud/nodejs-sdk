import fs from 'fs/promises';
import { readFile } from './detect_services';
import path from 'path';

const main = async () => {
    const serviceMap = readFile();

    const pList = Object.keys(serviceMap).map((str) => {
        const pathStr = path.resolve(`./${str.split('/').join('-')}`);
        return fs.rm(pathStr, { recursive: true, force: true });
    });

    await Promise.all(pList);
};

if (require.main === module) {
    main();
}
