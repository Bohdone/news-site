module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest" : true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    rules: {
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",

    },
    globals: {
        __IS_DEV__: true,
    },
}
