import * as path from 'path';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const modulesToTransform = [
    'node-fetch',
    'fetch-blob',
    'data-uri-to-buffer',
    'formdata-polyfill',
];

export default {
    moduleFileExtensions: [
        'js',
        'ts',
    ],
    preset: 'ts-jest',
    rootDir: path.resolve('./src/'),
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
    transformIgnorePatterns: [
        `node_modules/(?!(${modulesToTransform.join('|')})/.*)`,
    ],
};
