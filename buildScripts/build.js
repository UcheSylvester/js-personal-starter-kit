/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfg from '../webpack.confg.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundles...'))

webpack(webpackConfg).run((err, stats) => {
	if(err){
			console.log(chalk.red(err));
			return 1;
	}
	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){
 return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

 if(jsonStats.hasWarnings){
 console.log(chalk.yellow('webpack generate the following warning:'));
 jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
 }

 console.log(`webpack stats ${stats}`);

 console.log(chalk.green('your app has been build for production'));
	return 0;
 });
