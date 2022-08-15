const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // configuracion de entrada y salida del bundler
    entry: {
        bundle: './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    // Estilos para la pagina
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i, 
              type: 'asset/resource',
            },
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
        ],
    },
    // server
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
} 