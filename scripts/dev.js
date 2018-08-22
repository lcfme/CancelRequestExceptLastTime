const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');

const webpackConf = require('../webpack.config');
const compiler = webpack(
    merge(webpackConf, {
        entry: './test.js',
        output: {
            filename: 'test.js',
            path: path.resolve(__dirname, '../'),
            publicPath: '/'
        },
        watch: true,
        mode: 'development',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin()
        ]
    })
);
const app = express();

app.use(middleware(compiler, { publicPath: '/' }));
app.get('/test', (req, res) => {
    setTimeout(() => {
        res.send({
            msg: 'ok',
            code: 0
        });
    }, 5000);
});

app.post('/test', (req, res) => {
    setTimeout(() => {
        res.send({
            msg: 'ok',
            code: 0
        });
    }, 5000);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
