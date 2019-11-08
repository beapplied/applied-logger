/* eslint-disable no-console */

const chalk = require("chalk")

module.exports = {
    error: {
        function: chalk.red,
        text: "🤯   [ERROR] ",
        console: message => { console.error(message) }
    },

    warn: {
        function: chalk.yellow,
        text: "⚠️   [WARN]  ",
        console: message => { console.warn(message) }
    },

    debug: {
        function: chalk.blue,
        text: "🕵️‍   [DEBUG] ",
        console: message => { console.log(message) }
    },

    info: {
        function: chalk.green,
        text: "🧙‍   [INFO]  ",
        console: message => { console.info(message) }
    },

    sql: {
        function: chalk.grey,
        text: "[SQLIZE] ",
        console: message => { console.log(message) }
    },

    log: {
        function: chalk.magenta,
        text: "🌳  [LOG]   ",
        console: message => { console.log(message) }
    }
}