const webpack = require('webpack')
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // assetModuleFilename: 'assets/images/[name]-[hash][ext]'
    },
    devServer: {
        port: 5000,
        static: './public',
        hot: true
    },
    module: {
        rules: [{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(s*)css$/,
                use: [
                    miniCss.loader,
                    'css-loader?url=false',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],

}