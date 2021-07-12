const path = require('path');
const nodeExternals = require('webpack-node-externals');

export const entry = './server/index.js';
export const target = 'node';
export const externals = [nodeExternals()];
export const output = {
    path: resolve('server-build'),
    filename: 'index.js'
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader'
        }
    ]
};