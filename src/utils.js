/* eslint-disable no-console */

const colorize = require("json-colorizer")
const config = require("./config")



exports.JSONifier = input => {
    if (input instanceof Error === true) return input.stack
    
    if (typeof input === "object") {
        return colorize(JSON.stringify(input), { pretty: true })
    }
   
    try {
        JSON.parse(input)
    } catch (e) {
        return input
    }
  
    return colorize(input, { pretty: true })
}

exports.constructError = (type, err, req) => {
    const errJson = {
        name: err.name,
        message: err.message,
        stack: err.stack,
        context: err.context,
        status: type
    }

    if (req) {
        errJson.url = req.url
        errJson.agent = req.headers ? ["user-agent"] : ""
        if (req.user) {
            errJson.user = req.user.id
            errJson.org = {
                id: req.user.Org && req.user.Org.id,
                name: req.user.Org && req.user.Org.name
            }
        }
    }

    return colorize(JSON.stringify(errJson), { pretty: true })
}

exports.checkForSpecifiError = inputs => {
    return inputs.length === 2 && inputs[0] instanceof Error && !!inputs[1].url
}

exports.printer = (type, input) => { /* eslint-disable-line consistent-return */
    if(!config[type]) return exports.JSONifier(input)

    config[type].console(
        config[type].function(`${config[type].text} ${exports.JSONifier(input)}`)
    )
}
