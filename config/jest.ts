import * as path from 'path';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    moduleFileExtensions: [
        'js',
        'ts',
    ],
    modulePathIgnorePatterns: ['./src/generated'],
    preset: 'ts-jest',
    rootDir: path.resolve('./src/'),
    transform: {
        '^.+\\.[tj]s$': 'ts-jest',
    },
};
