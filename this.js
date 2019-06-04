const logger = require('./src/logger')

const dummyObject = JSON.stringify({
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

logger.log(dummyObject)

logger.log({ hello: 'a', b: true})