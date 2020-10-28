const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')


module.exports = (env) => {
  console.log(env)
  return {
    entry: './src/app.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins:[
      new CleanPlugin.CleanWebpackPlugin()
    ]
  };
};
