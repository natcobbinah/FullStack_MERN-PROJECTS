const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require('webpack-node-externals')

const config = {
    name: "server",
    entry: [
        path.join(CURRENT_WORKING_DIR, './user_backend/server/server.js')
    ],
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}

module.exports = config;