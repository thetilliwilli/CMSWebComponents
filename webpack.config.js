var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './Src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'Build')
    },
    devServer: { contentBase: './Build', historyApiFallback: true },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.jsx$/, loader: 'babel-loader' }
        ]
    }
};
