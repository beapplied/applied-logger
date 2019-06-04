const logger = require("./logger")
const chalk = require("chalk")
const colorize = require("json-colorizer")
const sqlFormatter = require('sql-formatter')

const logSpy = jest.spyOn(console, "log")

afterEach(() => {
    logSpy.mockClear()
})

test("error uses the error pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.error("error message")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.red("🤯   [ERROR]  error message"))
})

test("warn uses the warn pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.warn("warn message")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.yellow("⚠️   [WARN]   warn message"))
})

test("info uses the info pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.info("info message")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.green("🧙‍   [INFO]   info message"))
})

test("log uses the log pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.log("hello")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe("🌳  [LOG]    hello")
})

test("debug uses the debug pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.debug("debug message")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.blue("🕵️‍   [DEBUG]  debug message"))
})

test("logger can deal with js objects", () => {
    const dummyObject = {
        this: {
            hello: true,
            test: [1,2,3,4]
        },
        is: [
            { test: 1 },
            { test: 2 },
            { test: 3 },
            { test: 4 }
        ],
        a: true,
        test: 'hello'
    }
    expect(console.log.mock.calls.length).toBe(0)
    logger.log(dummyObject)
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).not.toBe("🌳  [LOG]    [object Object]")
    expect(console.log.mock.calls[0][0]).toBe(`🌳  [LOG]    ${colorize(dummyObject)}`)
})

test("logger can deal with json", () => {
    const dummyJSON = JSON.stringify({
        "this": {
            "hello": true,
            "test": [1,2,3,4]
        },
        "is": [
            { "test": 1 },
            { "test": 2 },
            { "test": 3 },
            { "test": 4 }
        ],
        "a": true,
        "test": "hello"
    })
    expect(console.log.mock.calls.length).toBe(0)
    logger.log(dummyJSON)
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(`🌳  [LOG]    ${colorize(dummyJSON)}`)
})

test("logger.sql can deal with a string", () => {
    const sql = 'hello, this is a string'
    expect(console.log.mock.calls.length).toBe(0)
    logger.sql(sql)
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.grey(`[SQLIZE] ${sqlFormatter.format(sql)}`))
})

test("logger.sql can deal with sql", () => {
    const sql = 'SELECT * FROM "Feedbacks" f JOIN "Applications" a on f."ApplicationId" = a.id JOIN "Jobs" j on a."JobId" = j.id"'
    expect(console.log.mock.calls.length).toBe(0)
    logger.sql(sql)
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.grey(`[SQLIZE] ${sqlFormatter.format(sql)}`))
})

test("logger can deal with multiple arguments", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.error('hello', 'test')
    expect(console.log.mock.calls.length).toBe(2)
    expect(console.log.mock.calls[0][0]).toBe(chalk.red("🤯   [ERROR]  hello"))
    expect(console.log.mock.calls[1][0]).toBe(chalk.red("🤯   [ERROR]  test"))
})
