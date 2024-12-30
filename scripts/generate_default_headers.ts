import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const packageJSONPath = resolve('package.json');
const data = readFileSync(packageJSONPath, 'utf8');
const jsonData = JSON.parse(data);

const defaultHeadersPath = resolve('./src/default-headers.ts');
writeFileSync(
    defaultHeadersPath,
    `export const DEFAULT_HEADERS = {
    ['x-proxy-agent']: '${jsonData.name}',
    ['x-proxy-agent-version']: '${jsonData.version}',
};\n`,
    'utf8',
);
