/* eslint-disable */

const logger = require("./src/logger")
require("jasmine-check").install()

describe("strings", () => {
    check.it(
        "addition is commutative",
        gen.string,
        gen.string,
        (stringA, stringB) => {
            logger.log(stringA, stringB)
        }
    )
})

describe("objects + arrays", () => {
    check.it(
        "addition is commutative",
        gen.object,
        gen.array,
        (stringA, stringB) => {
            logger.log(stringA, stringB)
        }
    )
})

describe("JSON", () => {
    check.it(
        "addition is commutative",
        gen.JSON,
        (stringA) => {
            logger.log(stringA)
        }
    )
})
