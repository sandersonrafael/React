module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'google'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['warn', 4],
        'require-jsdoc': 'off',
        'quote-props': 'off',
        'no-unused-vars': 'warn',
        'object-curly-spacing': 'off',
        'linebreak-style': 'off',
    },
};
