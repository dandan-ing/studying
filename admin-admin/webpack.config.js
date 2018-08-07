
const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //entry: '/src/app.js',
    output: {
        //path: path + resolve(__dirname, 'dist'),
        // publicPath: '/dist/',
        filename:'[name]-[hash].js'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['env','react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                {
                    loader: "html-loader",
                    options: { 
                        minimize: true                   
                    }
                }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
        new CleanWebpackPlugin(['dist']),
        //处理html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "./index.html", // 生成的html存放路径，相对于 path
            hash: true // 为静态资源生成hash值
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].[chunkhash:8].css"
        })
    ],
    watch: env === 'development',
    watchOptions: {
        ignored: /node_modules/, // 忽略不用监听变更的目录
        aggregateTimeout: 500, // 防止重复保存频繁重新编译,500毫秒内重复保存不打包
        poll: 1000 // 每秒询问的文件变更的次数
    },
    devServer: {
        port: 8086,
        historyApiFallback: {
            index: '/dist/index.html'
        }
    },
    resolve:{
        alias:{
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component'),
        }
    }
}