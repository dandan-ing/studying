const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = process.env.NODE_ENV;
const path = require('path');

module.exports = {
    entry: {
        entry:'./app/index.js'
    },
    output: {
        filename:'[name]-[hash].js'
    },
    devtool: env === 'production' ? false : 'cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,  //可以查看页面的报错信息,并且所有路径都会执行index.html
        compress: true // 开发服务器是否启动gzip等压缩
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            "react",
                            ["env", {
                                "targets": {
                                    "browsers": ["last 2 versions", "safari >= 7", "iOS >= 8"]
                                }                        
                            }],
                            'stage-1'                
                        ],
                        "plugins": [
                            "transform-decorators-legacy",
                            "transform-decorators"                
                        ]
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
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }, 
            {
                test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //在打包前清空 dist 目录
        new HtmlWebPackPlugin({
            template: "./app/index.html",
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
    resolve: {
        alias: {
            Mock: path.resolve(__dirname, 'mock'),
            Components: path.resolve(__dirname, 'app/components')
        }
    }
};