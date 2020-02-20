/* eslint-disable no-console */


const chalk = require("chalk")
const colorize = require("json-colorizer")
const sqlFormatter = require('sql-formatter')
const logger = require("./logger")

const logSpy = jest.spyOn(console, "log")
const errorSpy = jest.spyOn(console, "error")
const warnSpy = jest.spyOn(console, "warn")
const infoSpy = jest.spyOn(console, "info")

afterEach(() => {
    logSpy.mockClear()
    errorSpy.mockClear()
    warnSpy.mockClear()
    infoSpy.mockClear()
})

test("error uses the error pattern", () => {
    expect(console.error.mock.calls.length).toBe(0)
    logger.error("error message")
    expect(console.error.mock.calls.length).toBe(1)
    expect(console.error.mock.calls[0][0]).toBe(chalk.red("🤯   [ERROR]  error message"))
})

test("warn uses the warn pattern", () => {
    expect(console.warn.mock.calls.length).toBe(0)
    logger.warn("warn message")
    expect(console.warn.mock.calls.length).toBe(1)
    expect(console.warn.mock.calls[0][0]).toBe(chalk.yellow("⚠️   [WARN]   warn message"))
})

test("warn uses the warn pattern even if passed an error", () => {
    expect(console.warn.mock.calls.length).toBe(0)
    logger.warn(new Error("warn error"))
    expect(console.warn.mock.calls.length).toBe(1)
    expect(console.warn.mock.calls[0][0]).toContain("[WARN]")
    expect(console.warn.mock.calls[0][0]).toContain("Error: warn error")
})

test("info uses the info pattern", () => {
    expect(console.info.mock.calls.length).toBe(0)
    logger.info("info message")
    expect(console.info.mock.calls.length).toBe(1)
    expect(console.info.mock.calls[0][0]).toBe(chalk.green("🧙‍   [INFO]   info message"))
})

test("log uses the log pattern", () => {
    expect(console.log.mock.calls.length).toBe(0)
    logger.log("hello")
    expect(console.log.mock.calls.length).toBe(1)
    expect(console.log.mock.calls[0][0]).toBe(chalk.magenta("🌳  [LOG]    hello"))
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
    expect(console.log.mock.calls[0][0]).not.toBe(chalk.magenta("🌳  [LOG]    [object Object]"))
    expect(console.log.mock.calls[0][0]).toBe(chalk.magenta(`🌳  [LOG]    ${colorize(dummyObject, { pretty: true })}`))
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
    expect(console.log.mock.calls[0][0]).toBe(chalk.magenta(`🌳  [LOG]    ${colorize(dummyJSON, { pretty: true })}`))
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
    expect(console.error.mock.calls.length).toBe(0)
    logger.error('hello', 'test', [1,2,3])
    expect(console.error.mock.calls.length).toBe(3)
    expect(console.error.mock.calls[0][0]).toBe(chalk.red("🤯   [ERROR]  hello"))
    expect(console.error.mock.calls[1][0]).toBe(chalk.red("🤯   [ERROR]  test"))
    expect(console.error.mock.calls[2][0]).toBe(chalk.red(`🤯   [ERROR]  ${colorize([1,2,3], { pretty: true })}`))
})

test("if specific error log out once" ,()=>{
    const dummyError = new Error('narwhales are better then unicorns');
    const dummyRequest = {url: 'info-for-everything.com'}
    logger.error(dummyError, dummyRequest)
    expect(console.error.mock.calls.length).toBe(1)
    expect(console.error.mock.calls[0][0]).toContain("🤯   [ERROR]")
    expect(console.error.mock.calls[0][0]).toContain("info-for-everything.com")
})


test("if not specifc error return false" ,()=>{
    const dummyError = new Error('narwhales are better then unicorns');
    const dummyNotRequest = {noturl: 'info-for-everything.com'}
    logger.error(dummyError, dummyNotRequest)
    expect(console.error.mock.calls.length).toBe(2)
    expect(console.error.mock.calls[0][0]).toBe(chalk.red(`🤯   [ERROR]  ${dummyError.stack}`))
    expect(console.error.mock.calls[0][0]).not.toContain('info-for-everything.com')
    expect(console.error.mock.calls[1][0]).toContain('info-for-everything.com')
})

