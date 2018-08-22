const path = require('path');
module.exports = {
    context: path.resolve(__dirname, './'),
    entry: './index.js',
    output: {
        filename: 'easyrequest.js',
        path: path.resolve(__dirname, './'),
        publicPath: '/',
        library: 'easyRequest',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/')
            }
        ]
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
