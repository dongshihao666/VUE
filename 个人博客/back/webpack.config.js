var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var url = require("url")
module.exports = {
    entry: {
        main: __dirname + "/src/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    devServer: {
        compress: true,
        hot: true,
        port: 9900,
        host: "localhost",
        // setup(app){
        // 	app.get("/data",function(req,res){
        // 		res.setHeader("Access-Control-Allow-Origin","*");
        // 		res.setHeader("content-type","application/json;charset=utf-8");
        // 		res.json(data);
        // 	})
        // }
        proxy: {
            "/": "http://localhost:9999"
            // '/ueditor': {
            //     //后台接口地址
            //     target: 'http://localhost:9999',
            //     //这里可以模拟服务器进行get和post参数的传递
            //     changeOrigin: true,
            //     //前端所有的/ueditor'请求都会请求到后台的/ueditor'路径之下
            //     pathRewrite: {
            //         '^/ueditor': '/ueditor'
            //     }
            // }
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),

    ]

}