const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // configuracion de entrada y salida del bundler
  entry: {
    index: './src/js/index.js',
    random: './src/js/random.js',
    steps: './src/js/steps.js',
    autocomplete: './src/js/autocomplete.js',
    api: './src/js/api.js'
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
    new HtmlWebpackPlugin({
      title: 'Random',
      filename: 'random.html',
      template: './src/random.html'
    }),
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
        test: /\.(png|svg|jpg|jpeg|gif|)$/i,
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