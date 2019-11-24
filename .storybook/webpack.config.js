const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre'
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true // used with ForkTsCheckerWebpackPlugin
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.scss'],
    alias: {
      '@': rootPath,
      '~': rootPath,
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
