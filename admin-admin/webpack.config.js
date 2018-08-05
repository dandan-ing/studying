
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: '/src/app.js',
    outpath: {
        path: path + resolve(__dirname, 'dist'),
        filename: 'app.js'
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
                exclude: /node-modules/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin("style.css"),

    ]
}