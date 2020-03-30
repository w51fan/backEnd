module.exports = {
    "parser": "vue-eslint-parser",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    rules: {
      'no-console':  'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "linebreak-style": [0, "error", "windows"],
    },
};