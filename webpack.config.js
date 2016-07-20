/**
 * Created by nico on 06/07/2016.
 */
module.exports = {
    entry: './app/app.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

