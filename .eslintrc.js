module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'linebreak-style': [
            2,
            'unix'
        ],
        'quotes': [
            2,
            'single'
        ],
        'semi': [
            2,
            'always'
        ],
        'react/jsx-indent': [ 2, 4, ],
        'react/jsx-indent-props': [ 2, 4 ],
        'indent': [ 2, 4 ],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off'
    },
};
