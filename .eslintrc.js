module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        "jest/globals": true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["jest"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "import/extensions": ["never"]
    }
}
