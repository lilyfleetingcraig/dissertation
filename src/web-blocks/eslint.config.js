import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['dist', 'node_modules'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
    {
        files: ['vitest.config.ts', 'src/test/**/*.ts'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    prettierConfig
);
