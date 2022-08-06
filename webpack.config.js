const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"), // or "./src/index.tsx"
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js", publicPath: "/" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    devServer: { static: path.join(__dirname, "src"), historyApiFallback: true },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            },
            { 
                test: /\.(jpg|jpeg|png|gif)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    devtool: "eval-source-map"
};