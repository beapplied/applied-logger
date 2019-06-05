const logger = require('./src/logger')
const utils = require('./src/utils')

const y = new Error('I was constructed via the "new" keyword!');

const object = {
    this: 'thing',
    hello: [
        12, 4, 5
    ]
}

utils.checkForSpecifiError([new Error('hello'), { url: 'wsjkwldfjk' }])