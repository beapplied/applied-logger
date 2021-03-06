import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import pkg from "./package.json"

export default [
    {
        input: "src/logger.js",
        external: ["ms"],
        output: [
            { file: pkg.main, format: "cjs", exports: "named" },
            { file: pkg.module, format: "es", exports: "named" }
        ],
        plugins: [resolve(), commonjs()]
    }
]
