import path from 'path'
import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  entry: path.join(__dirname, '../src/main.ts'),
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, '../src/assets'), to: path.resolve(__dirname, '../dist/assets') }]
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }
    ]
  },
  devtool: 'inline-source-map'
}

export default config
