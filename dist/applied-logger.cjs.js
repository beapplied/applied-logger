'use strict';

/* eslint-disable no-console */

const chalk = require("chalk");
const sqlFormatter = require("sql-formatter");
const utils = require('./utils');

exports.error = (...inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer("error", utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer("error", arg);
        });
    }
};

exports.warn = (...inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer("warn", utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer("warn", arg);
        });
    }
};

exports.info = (...inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer("info", utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer("info", arg);
        });
    }
};

exports.log = (...inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer("log", utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer("log", arg);
        });
    }
};

exports.debug = (...inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer("debug", utils.constuctError(inputs[0], inputs[1]));
    } else {
        inputs.forEach(arg => {
            utils.printer("debug", arg);
        });
    }
};

exports.sql = (...inputs) => {
    inputs.forEach(arg => {
        console.log(chalk.grey(`[SQLIZE] ${sqlFormatter.format(arg)}`));
    });
};
