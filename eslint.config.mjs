import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    { ignores: ['src/generated/**', 'node_modules/**', 'examples/**'] },
    ...tseslint.configs.recommended,
];
