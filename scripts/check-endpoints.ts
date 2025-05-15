import * as fg from 'fast-glob';
import * as path from 'path';
import { Namespace, NamespaceBase, Root, Service } from 'protobufjs';
import SERVICE_ENDPOINTS_MAP from '../src/service-endpoints-map.json';

const detectServices = <T extends NamespaceBase>(
    node: T,
    onService: (service: Service) => void,
) => {
    for (const child of Object.values(node.nested ?? {}).sort((a, b) =>
        a.name < b.name ? -1 : a.name === b.name ? 0 : 1,
    )) {
        if (child instanceof Service) {
            onService(child);
        } else if (child instanceof Namespace) {
            detectServices(child, onService);
        }
    }
};

const newProtobufjsRoot = () => {
    const pbRoot = new Root();

    pbRoot.resolvePath = (_origin, target) => {
        const targets = target.split('/');

        switch (targets[0]) {
            case 'google': {
                switch (targets[1]) {
                    case 'protobuf': {
                        return `./node_modules/protobufjs/${target}`;
                    }
                    default: {
                        return `./cloudapi/third_party/googleapis/${target}`;
                    }
                }
            }
            case 'third_party': {
                return `./cloudapi/${target}`;
            }
            case 'yandex': {
                return `./cloudapi/${target}`;
            }
            default: {
                return target;
            }
        }
    };

    return pbRoot;
};

const main = () => {
    const PROTO_DIR = path.resolve('./cloudapi');
    const protoFiles = fg.sync('**/*.proto', { cwd: PROTO_DIR });

    const pbRoot = newProtobufjsRoot();

    const SERVICES: Service[] = [];
    const findServices = <T extends NamespaceBase>(node: T) => {
        detectServices(node, (service) => SERVICES.push(service));
    };

    pbRoot.load(protoFiles, { alternateCommentMode: true }).then((loadedRoot) => {
        const SERVICE_IDS = new Set<string>();
        let hasMissing = false;

        const map = SERVICE_ENDPOINTS_MAP as Record<string, string>;

        Object.keys(map).forEach((service) => SERVICE_IDS.add(service));

        findServices(loadedRoot);
        console.log('Missing services:');
        for (const s of SERVICES) {
            // full name without leading dot
            const fullName = s.fullName.slice(1);

            if (!SERVICE_IDS.has(fullName)) {
                console.log(fullName);
                hasMissing = true;
            }
        }

        if (hasMissing) {
            process.exit(1);
        }
    });
};

if (require.main === module) {
    main();
}

export const getServiceList = async () => {
    const PROTO_DIR = path.resolve('./cloudapi');
    const protoFiles = fg.sync('**/*.proto', { cwd: PROTO_DIR });

    const pbRoot = newProtobufjsRoot();

    const serviceList: Service[] = [];

    return pbRoot.load(protoFiles, { alternateCommentMode: true }).then((loadedRoot) => {
        detectServices(loadedRoot, (service) => serviceList.push(service));
        return serviceList;
    });
};
