/* eslint-disable no-console */

const chalk = require("chalk")

module.exports = {
    ERROR: {
        function: chalk.red,
        text: "🤯   [ERROR] ",
        console: message => { console.error(message) }
    },

    WARN: {
        function: chalk.yellow,
        text: "⚠️   [WARN]  ",
        console: message => { console.warn(message) }
    },

    DEBUG: {
        function: chalk.blue,
        text: "🕵️‍   [DEBUG] ",
        console: message => { console.log(message) }
    },

    INFO: {
        function: chalk.green,
        text: "🧙‍   [INFO]  ",
        console: message => { console.info(message) }
    },

    SQL: {
        function: chalk.grey,
        text: "[SQLIZE] ",
        console: message => { console.log(message) }
    },

    LOG: {
        function: chalk.magenta,
        text: "🌳  [LOG]   ",
        console: message => { console.log(message) }
    }
}