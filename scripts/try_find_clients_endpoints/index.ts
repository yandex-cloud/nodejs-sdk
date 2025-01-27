import { ClientsMapType, readFile } from '../detect_services';

type EndpointType = { id: string; address: string };

const buildEndpointsMap = (endpoints: EndpointType[]) => {
    return new Map(endpoints.map(({ id, address }) => [id.split('-').join(''), { address, id }]));
};

const subsequenceLenghth = (target: string, subsequenceStr: string) => {
    let maxCount = 0;

    for (let i = 0; i !== target.length; i++) {
        if (subsequenceStr[0] === target[i]) {
            let count = 0;
            for (let j = 0, k = i; j !== subsequenceStr.length && k !== target.length; j++, k++) {
                if (subsequenceStr[j] === target[k]) count++;
                else break;
            }

            if (count > maxCount) maxCount = count;
        }
    }

    return maxCount;
};

const main = async () => {
    const resp = await fetch('https://api.cloud.yandex.net/endpoints', {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());

    const endpointsMap = buildEndpointsMap(resp.endpoints);

    const serviceMap = readFile();

    Object.keys(serviceMap).forEach((serviceName) => {
        let maxCount = 0;
        let res: string[] = [];
        let resId: string[] = [];

        endpointsMap.forEach(({ address, id }, endpointId) => {
            const count = subsequenceLenghth(serviceName.split('/').join(''), endpointId);

            if (count === 0) return;

            if (count > maxCount) {
                maxCount = count;
                res = [address];
                resId = [id];
                return;
            }

            if (count === maxCount) {
                res.push(address);
                resId.push(id);
            }
        });

        console.log(`\n ${serviceName} ${maxCount}`);
        console.log(res, resId);
        console.log(`\n`);
    });
};

if (require.main === module) {
    main();
}
