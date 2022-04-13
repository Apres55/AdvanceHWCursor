const { dirname } = require('path');
const path = require('path'); //amd
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import path from "path"; //umd
// export default path; //umd

module.exports = { //amd
    mode: 'development',
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    devServer: {
        open: true,
    },
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".JSON"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, "src"),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "defaults, ie 11" }]
                    ],
                    plugins: [["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }]]
                }
            }]
        }, { 
            test: /\.tsx?$/, 
            loader: "ts-loader" 
        },{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

