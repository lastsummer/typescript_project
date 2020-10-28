const path = require('path');


module.exports = (env) => {
  console.log(env)
  return {
    entry: './src/app.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      publicPath: '/dist'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    // watch: env.development,
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
    }
  };
};
