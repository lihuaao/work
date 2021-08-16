const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./js/main.js",// 入口文件
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    output: { // 出口文件
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },

}