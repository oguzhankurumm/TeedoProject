module.exports = {
    plugins: ['jest', 'promise', 'react-hooks'],
    settings: {
        'import/resolver': {
            'babel-module': {},
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['.'],
                alias: {
                    _docs: './__docs__/',
                    _tests: './__tests__/',
                    _assets: './src/assets',
                    _data: './src/data',
                    _redux: './src/redux',
                    _services: './src/services',
                    _context: './src/context',
                    _utils: './src/utils',
                    // Diğer aliaslar buraya eklenebilir
                },
            },
        },
    },

    extends: [
        '@react-native-community/eslint-config',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    env: {
        commonjs: true,
        es6: true,
        jest: true,
        browser: true,
        es2021: true,
        node: true,
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'max-len': ['warn', { code: 120 }],
        // İhtiyaca göre kurallar burada özelleştirilebilir
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
    },
};
