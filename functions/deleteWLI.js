require('dotenv').config()
const {DELETE_WLI} = require("./utilities/wliQueries")
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async (event) => {
    console.log({event})
    
    if (event.httpMethod !== 'DELETE') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {id} = JSON.parse(event.body)
    const variables = {id}
    try {
        const {deleteWLI} = await sendQuery(DELETE_WLI, variables)
        return formattedResponse(200, {id: deleteWLI})
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with deleteWLI"})
    }
}