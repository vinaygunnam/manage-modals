var path = require('path');
var webpack = require('webpack');

var port = 4000;

module.exports = {
    port: port,
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, include: path.join(__dirname, 'src') },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
};
