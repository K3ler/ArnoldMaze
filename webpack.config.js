const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[contenthash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        open: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader",
                    options: 
                    { 
                        sourceMap: true, 
                        config: 
                        { 
                            path: 'postcss.config.js' 
                        } 
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'img'
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.[contenthash].css"
        })
    ],
    mode: 'development'
};