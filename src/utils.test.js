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



describe('JSONifier method', ()=>{
    
    const dummyError = new Error('coffee is healthy');
    const dummyInputObject = {details:'its a dummy error'}
    const dummyString = 'catch 22 theres a great error'

 
    test('if it detects an error it should return the input.stack', ()=>{
        expect(utils.JSONifier(dummyError)).toContain(dummyError)
    })

    test('if given an object it should return a colorized json string', ()=> {
        expect(utils.JSONifier(dummyInputObject)).toContain(dummyInputObject.details)
    })

    test('if string it should return a a colorized Json string', ()=>{
        expect(utils.JSONifier(dummyString)).toContain(dummyString)
        const result = utils.JSONifier(dummyString)
        expect(typeof result).toBe('string')
    })

    // test('if is a json input it should return a input',()=>{
    //     expect(utils.JSONifier(dummyJSON)).toBe(dummyJSON)
    // })

})

describe('printer method', ()=>{

    const dummyInput = 'oh look its an error'
    
    const logSpy = jest.spyOn(console, "log")

    afterEach(() => {
        logSpy.mockClear()
    })


    test('it should take a key on the config and an error',()=>{
       expect(console.log.mock.calls.length).toBe(0)
       utils.printer('error', dummyInput)
       expect(console.log.mock.calls.length).toBe(1)
       expect(console.log.mock.calls[0][0]).toContain(dummyInput)
    })

    test('it should console wether the color key is in th object', ()=>{
        expect(utils.printer('unicorn', dummyInput)).toContain(dummyInput)
    })
})

describe('constuctError method', ()=>{

    const dummyErrObj =  {
        name: 'bob',
        message: 'i shot the sherrif',
        stack: 'stuff',
        context: 'song',
        status: "ERROR"
    }

    const dummyreqObj =  {
        url: 'somewhere@somewhere.com',
    }

    test('it should be able to respond to an err and and err and req call',()=>{
        expect(utils.constuctError(dummyErrObj)).toContain('i shot the sherrif')
        expect(utils.constuctError(dummyErrObj, dummyreqObj)).toContain('somewhere@somewhere.com')
    })
})