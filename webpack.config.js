const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

const dflPort = 8080  //配置端口

const pxtorem = require('postcss-pxtorem');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '')
];


module.exports = {
  // 配置服务器
  devServer: {
    port: dflPort,
    contentBase: path.join(__dirname, './app'),
    historyApiFallback: true,
    inline: true,
    noInfo: false,
    open: true,
    stats: {colors: true}
  },
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + dflPort,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/app/src/index.js'),
  ],
  output: {
    path: '/dist/assets',
    publicPath: '/assets',
    filename: 'bundle.js',
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: 'react-hot-loader!babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      // {
      //   test: /\.(png|jpg|gif|woff|woff2|svg)$/,
      //   loaders: [
      //     'url-loader?limit=10000&name=[hash:8].[name].[ext]',
      //   ]
      // },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loaders: [
          'url-loader?limit=10000&name=[hash:8].[name].[ext]',
        ]
      },
      {
        test:/\.(svg)$/i,
        loaders: ['svg-sprite-loader'],
        include: svgDirs //把svgDirs路劲下的所有svg文件交给svg-sprite-loader 插件处理
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, './node_modules')],
    extensions: [' ', '.web.js', '.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer,
                  pxtorem({
                    rootValue: 100,
                    propWhiteList: []
                  })]
        }
      }
    }),
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ]
}
