const chalk = require("chalk")

module.exports = {
    error: {
        function: chalk.red,
        text: "🤯   [ERROR] "
    },

    warn: {
        function: chalk.yellow,
        text: "⚠️   [WARN]  "
    },

    debug: {
        function: chalk.blue,
        text: "🕵️‍   [DEBUG] "
    },

    info: {
        function: chalk.green,
        text: "🧙‍   [INFO]  "
    },

    sql: {
        function: chalk.grey,
        text: "[SQLIZE] "
    },

    log: {
        function: chalk.magenta,
        text: "🌳  [LOG]   "
    }
}