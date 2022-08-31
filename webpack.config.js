const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackFavicons = require('webpack-favicons');

module.exports = {
  // configuracion de entrada y salida del bundler
  entry: {
    index: './src/js/index.js',
    steps: './src/js/steps.js',
    autocomplete: './src/js/autocomplete.js'
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
    }),
    new HtmlWebpackPlugin({
      title: 'Steps',
      filename: 'steps.html',
      template: './src/steps.html'
    }),
    new WebpackFavicons({
      src: 'assets/favicons/favicon.ico',
      path: 'img',
      background: '#000',
      theme_color: '#000',
      icons: {
        favicons: true
      }
    })
  ],
  // Estilos para la pagina
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|icon)$/i,
        type: 'asset/resource',
      },
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true
  }
} 