/* eslint-disable no-console */

const chalk = require("chalk")
const colorize = require("json-colorizer")
const sqlFormatter = require('sql-formatter')

const JSONifier = string => {
    try {
        JSON.parse(string)
    } catch (e) {
        return string
    }
    return colorize(string)
}

exports.error = data => {
    console.log(chalk.red(`🤯   [ERROR]  ${JSONifier(data)}`))
}

exports.warn = data => {
    console.log(chalk.yellow(`⚠️   [WARN]   ${JSONifier(data)}`))
}

exports.info = data => {
    console.log(chalk.green(`🧙‍   [INFO]   ${JSONifier(data)}`))
}

exports.log = data => {
    console.log(`🌳  [LOG]    ${JSONifier(data)}`)
}

exports.debug = data => {
    console.log(chalk.blue(`🕵️‍   [DEBUG]  ${JSONifier(data)}`))
}

exports.sql = data => {
    console.log(chalk.grey(`[SQLIZE] ${sqlFormatter(data)}`))
}
