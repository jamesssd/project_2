module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-duplicate-case":"error",
        "no-empty":"error",
        "no-extra-semi":"error",
        "no-func-assign": "error",
        "no-irregular-whitespace":"error",
        "no-unreachable": "error",
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-empty-function": "error",
        "no-multi-spaces": "error",
        "no-unused-vars": "error",
        "camelcase": "error",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "prettier/prettier": "error"
    }
};