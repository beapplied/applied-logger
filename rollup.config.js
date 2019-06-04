import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: 'src/logger.js',
        plugins: [terser()],
        output: {
            file: 'umd/applied-logger.js',
            format: 'umd',
            name: 'applied-logger',
            esModule: false
        }
    },
    {
        input: 'src/logger.js',
        output: {
            file: 'esm/index.js',
            format: 'esm'
        }
    }
];
