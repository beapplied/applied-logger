/* eslint-disable no-console */

const chalk = require("chalk")
const sqlFormatter = require("sql-formatter")
const utils = require('./utils')

let tracerInstance = null

exports.init = (tracer) => {
    tracerInstance = tracer
}

const baseLog = (type, inputs) => {
    if (utils.checkForSpecifiError(inputs)) {
        utils.printer(tracerInstance, type,  utils.constructError(type, inputs[0], inputs[1]))
    } else {
        inputs.forEach(input => {
            utils.printer(tracerInstance, type, input)
        })
    }
}

exports.error = (...inputs) => baseLog('ERROR', inputs) 

exports.warn = (...inputs) => baseLog('WARN', inputs) 

exports.info = (...inputs) => baseLog('INFO', inputs) 

exports.log = (...inputs) => baseLog('LOG', inputs) 

exports.debug = (...inputs) => baseLog('DEBUG', inputs) 

// only bespoke thing
exports.sql = (...inputs) => {
    inputs.forEach(arg => {
        console.log(chalk.grey(`[SQLIZE] ${sqlFormatter.format(arg)}`))
    })
}
