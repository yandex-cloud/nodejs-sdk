module.exports = {
    tabWidth: 4,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.md', '*.json', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
