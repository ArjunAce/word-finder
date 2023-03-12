const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require("path").resolve;

module.exports = {
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    resolve: {
        alias: {
            assets: resolve(__dirname, "src/assets"),
            components: resolve(__dirname, "src/components"),
            styles: resolve(__dirname, "src/styles"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif|woff2|woff|otf|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'static'
                    }
                }
            }
        ]
    }
};