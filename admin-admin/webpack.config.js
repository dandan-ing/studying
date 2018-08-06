
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: '/src/app.js',
    outpath: {
        path: path + resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loder: 'babel-loader',
                    options: {
                        press:['env','react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
            
        ]
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimiza.CommmonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })

    ],
    devServer: {
        port: 8086
    }
}