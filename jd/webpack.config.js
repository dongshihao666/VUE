var webpack = require('webpack');
var data = require('./src/data/data.js');

var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png|.jpg$/,
                use: ["url-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        port: 9000,
        host: '127.0.0.1',
        hot: true,
        setup(app) {
            app.get("/data", function(req, res) {
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("content-type", "application/json;charset=utf-8");
                res.json(data);
            })
        }
    }
}