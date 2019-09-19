const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: "localhost", //服务器的ip地址
        port: 8080, //端口
        open: true, //自动打开页面
        openPage: "index.html"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }, // media
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: "url-loader"
                }
            },
            // fonts
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    }
};
