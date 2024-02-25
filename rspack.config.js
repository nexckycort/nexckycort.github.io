// const NodePolyfill = require('@rspack/plugin-node-polyfill');
const rspack = require('@rspack/core');
const refreshPlugin = require('@rspack/plugin-react-refresh');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const path = require('path');

const HOST = 'localhost';
const PORT = 3000;

const isDev = process.env.NODE_ENV === 'development';

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.ts'
  },
  output: {
    publicPath: `http://${HOST}:${PORT}/`
  },
  devtool: 'source-map',
  devServer: {
    open: isDev && true,
    port: PORT
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    tsConfigPath: path.resolve(__dirname, 'tsconfig.json')
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // ...
            }
          }
        ],
        type: 'css/auto' // set to 'css/auto' if you want to support '*.module.(scss|sass)' as CSS Module, otherwise set type to 'css'
      },
      {
        test: /\.(png|svg|woff2)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new CleanTerminalPlugin({
      message: `Dev server running on http://${HOST}:${PORT}`,
      beforeCompile: true
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: './public/index.html'
    }),
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    isDev ? new refreshPlugin() : null
  ].filter(Boolean)
};
