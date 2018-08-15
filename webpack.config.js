const path = require('path');

module.exports = {
    // entry: './src/app.js',
    // entry: './src/playground/redux-expensify.js',
    entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,   //run it through all js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'cheap-module-eval-source-map', // to see where the original error was, or console.log. 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}