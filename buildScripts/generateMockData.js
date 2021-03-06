/* This script generates mock data for local development
	 Making it possible to enjoy realist, but randomized data
	 without actaully pointing to a real API
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataScheme';
import fs from 'fs';
import chalk from "chalk";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
	if(err) {
		return console.log(chalk.red(err))
	} else {
		console.log(chalk.green("Mock data generated"));
	}
})
