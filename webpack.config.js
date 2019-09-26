const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: "index.js"
    },
    target: 'node',
    resolve: {
        // Add `.ts` as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` extension will be handled by `ts-loader`
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    }
};