import * as fs from 'fs';
import * as path from 'path';
import * as cp from 'child_process';

const PROTO_DIR = path.resolve('./cloudapi');
const TARGET = path.join(PROTO_DIR, 'yandex', 'cloud');

const isService = (file: string) => file.endsWith('_service.proto');

async function findRootServices(
    dir: string,
    rootServiceCallback: (file: fs.Dirent, dir: string) => void,
) {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });

    let skipWalkFlag = false;
    const dirsToVisit: string[] = [];

    files.forEach((file) => {
        if (file.isFile() && isService(file.name)) {
            rootServiceCallback(file, dir);
            skipWalkFlag = true;
            return;
        }

        if (skipWalkFlag === false && file.isDirectory()) {
            dirsToVisit.push(path.join(dir, file.name));
        }
    });

    if (skipWalkFlag) return;

    await Promise.all(dirsToVisit.map((dir) => findRootServices(dir, rootServiceCallback)));
}

type ServiceMapType = Record<string, { rootServiceList: string[] }>;

const versionRegExpStr = '(v[1-9][0-9]*(alpha)?)';

const versionRegExp = new RegExp('^' + versionRegExpStr + '$');
const isVersion = (str: string) => {
    return versionRegExp.test(str);
};

const endsWithVersionRegExp = new RegExp('/' + versionRegExpStr + '$');
const isEndsWithVersion = (dir: string) => {
    return endsWithVersionRegExp.test(dir);
};

const tryCombineServices = (serviceMap: ServiceMapType) => {
    const combinedServices: ServiceMapType = {};

    Object.keys(serviceMap).forEach((relativeDir: string) => {
        const dirList = relativeDir.split('/');

        const versionIdx = dirList.findIndex(isVersion);

        // trying combine by version
        if (versionIdx !== -1) {
            const relativeDirWithVersion = dirList.slice(0, versionIdx + 1).join('/');
            const servicePrefix = dirList.slice(versionIdx + 1);

            combinedServices[relativeDirWithVersion] = combinedServices[relativeDirWithVersion] || {
                rootServiceList: [],
            };
            serviceMap[relativeDir].rootServiceList.forEach((serviceName) => {
                combinedServices[relativeDirWithVersion].rootServiceList.push(
                    servicePrefix + '/' + serviceName,
                );
            });
            return;
        }

        combinedServices[relativeDir] = serviceMap[relativeDir];
        return;
    });

    return combinedServices;
};

export const detectRootServices = async (target: string) => {
    /** Key - dir */
    const serviceMap: ServiceMapType = {};
    const freeVersionServiceMap: ServiceMapType = {};

    await findRootServices(target, (rootService, _dir) => {
        const relativeDir = path.relative(target, _dir);

        const targetMap = isEndsWithVersion(relativeDir) ? serviceMap : freeVersionServiceMap;

        targetMap[relativeDir] = targetMap[relativeDir] || { rootServiceList: [] };
        targetMap[relativeDir].rootServiceList.push(rootService.name);
    });

    const combinedServiceMap = tryCombineServices(freeVersionServiceMap);

    Object.keys(combinedServiceMap).forEach((relativeDir) => {
        if (serviceMap[relativeDir]) {
            const combinedServiceList = combinedServiceMap[relativeDir].rootServiceList;
            serviceMap[relativeDir].rootServiceList.push(...combinedServiceList);

            return;
        }

        serviceMap[relativeDir] = combinedServiceMap[relativeDir];
    });

    return serviceMap;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const replacer = (key: string, value: any) => {
    if (Array.isArray(value)) {
        return value.sort();
    }

    return value && typeof value === 'object'
        ? Object.keys(value)
              .sort()
              .reduce((sorted, key) => {
                  sorted[key] = value[key];
                  return sorted;
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
              }, {} as any)
        : value;
};

export const writeToFile = (serviceMap: ServiceMapType) => {
    const filePath = path.resolve('./scripts/service_map.json');

    fs.writeFile(filePath, JSON.stringify(serviceMap, replacer, 2), 'utf8', (err) => {
        if (err !== null) {
            return;
        }

        const configPath = path.resolve('./.prettierrc.js');
        const comand = `npx --no-install prettier ${filePath} --write --config ${configPath}`;
        cp.execSync(comand);
    });
};

const main = async () => {
    const serviceMap = await detectRootServices(TARGET);

    writeToFile(serviceMap);
};

if (require.main === module) {
    main();
}
