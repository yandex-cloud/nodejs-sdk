import * as path from 'path';
import config from './jest';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    ...config,
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,ts}',
        '!generated/**',
    ],
    coverageDirectory: '../coverage',
};
