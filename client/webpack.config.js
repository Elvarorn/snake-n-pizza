const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: 'C:/Users/Elvar/documents/veff/pizzeria/snake-n-pizza/client/src/App.js',
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js',
       publicPath: '/'
    },
    module: {
       rules: [
           {enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use:'eslint-loader'},
          {test: /\.js$/, exclude: /node_modules/, use:'babel-loader'}
        ]
    },
    devServer: {
      port:1337,
      open:true,
      compress: true,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({title: 'Redux template', template: './index.html', inject: 'body'})
    ]

};
