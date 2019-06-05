/* eslint-disable no-console */

const chalk = require("chalk");
const sqlFormatter = require("sql-formatter");
const utils = require('./utils');

const baseLog = (type, inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer(type, utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer(type, arg);
        });
    }
};

exports.error = (...inputs) => baseLog('error', inputs); 

exports.warn = (...inputs) => baseLog('warn', inputs); 

exports.info = (...inputs) => baseLog('info', inputs); 

exports.log = (...inputs) => baseLog('log', inputs); 

exports.debug = (...inputs) => baseLog('debug', inputs); 

// only bespoke thing
exports.sql = (...inputs) => {
    inputs.forEach(arg => {
        console.log(chalk.grey(`[SQLIZE] ${sqlFormatter.format(arg)}`));
    });
};
