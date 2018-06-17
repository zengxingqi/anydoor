module.exports = {
    "globals": {},
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "esmaVersion": 6,
        "sourceType": "script"
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
