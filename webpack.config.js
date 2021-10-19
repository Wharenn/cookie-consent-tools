const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, '/dist');

module.exports = (env) => ({
  mode: env.mode,
  context: path.resolve(__dirname, './src'),
  entry: {
    'cookie-consent-tools': './index.js',
  },
  output: {
    path: outputPath,
    filename: '[name].min.js',
    publicPath: '/dist/',
    sourceMapFilename: '[name].map',
    library: 'cookieConsentTools',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[name].min.css',
    }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
});
