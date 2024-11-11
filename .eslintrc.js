// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ['expo', 'prettier'],
    ignorePatterns: ['/dist/*'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                jsxSingleQuote: false,
                bracketSpacing: true,
                bracketSameLine: false,
                arrowParens: 'always',
                singleAttributePerLine: true,
                endOfLine: 'lf',
            },
        ],
    },
};
