/* eslint-disable no-console */

const chalk = require("chalk")
const colorize = require("json-colorizer")
const sqlFormatter = require('sql-formatter')

const JSONifier = string => {
    if( typeof string === 'object' ) {
        return colorize(JSON.stringify(string))
    }
    try {
        JSON.parse(string)
    } catch (e) {
        return string
    }
    return colorize(string)
}

exports.error = (...theArgs) => {
    theArgs.forEach(arg => {
        console.log(chalk.red(`🤯   [ERROR]  ${JSONifier(arg)}`))
    })
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
    console.log(chalk.grey(`[SQLIZE] ${sqlFormatter.format(data)}`))
}
