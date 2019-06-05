const utils = require('./utils')


describe('checkForSpecifiError function', () => {
    test("it returns false when a single parameter is passed", () => {
        expect(utils.checkForSpecifiError('hello')).toBe(false)
    })

    test("it returns false when 2 strings are passed", () => {
        expect(utils.checkForSpecifiError(['hello', 'goodbye'])).toBe(false)
    })

    test("it returns false when an error object is passed without a request", () => {
        expect(utils.checkForSpecifiError([new Error('hello'), 'goodbye'])).toBe(false)
    })

    test("it returns false when a request object is passed without an error", () => {
        expect(utils.checkForSpecifiError(['hello', { url: 'wsjkwldfjk' }])).toBe(false)
    })

    test("it returns true when an error object and request are passed in the right order", () => {
        expect(utils.checkForSpecifiError([new Error('hello'), { url: 'wsjkwldfjk' }])).toBe(true)
    })

    test("it returns false when an error object and request are passed in the right order", () => {
        expect(utils.checkForSpecifiError([{ url: 'wsjkwldfjk' }, new Error('hello')])).toBe(false)
    })

    test("it returns false when an error object and request are passed in the right order", () => {
        expect(utils.checkForSpecifiError([new Error('hello'), { url: 'wsjkwldfjk' }, 'nope'])).toBe(false)
    })

})

describe('printer method', ()=>{

    const dummyInput = { data: 'an error'}


    test('its should take a string of the correct key value and an input object',()=>{
        console.log(utils.printer('warn', dummyInput))
     
    })
})