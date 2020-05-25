const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/client/index.js',
  mode: 'development',
  output: {
      filename: 'client_bundle.js',
      path: path.resolve(__dirname,'build/public'),
      publicPath: '/build/public'
  },
  module: {
      rules: [
        {
        test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
         
      },
      
      
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }

}