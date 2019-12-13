const webpack = require('webpack');
const config = require('../webpack.config');
const chalk = require('chalk');

webpack(config, function(err, stats) {
  if (err) {
    console.log(err);
    return;
  }
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n'
  );

  console.log(chalk.cyan('  Build complete.\n'));
});
