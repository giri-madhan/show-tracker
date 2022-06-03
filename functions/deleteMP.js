require('dotenv').config()
const {DELETE_MP} = require("./utilities/mpQueries")
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async (event) => {
    
    if (event.httpMethod !== 'DELETE') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {id} = JSON.parse(event.body)
    const variables = {id}
    try {
        const {deleteMP} = await sendQuery(DELETE_MP, variables)
        return formattedResponse(200, {id: deleteMP})
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with deleteMP"})
    }
}