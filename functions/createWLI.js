require('dotenv').config()
const {CREATE_WLI} = require("./utilities/wliQueries")
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')


exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {name, genre, releaseDate, duration, prodCompany, photo, overview, tagline, voteAverage} = JSON.parse(event.body)
    const variables = {name, genre, releaseDate, duration, prodCompany, photo, overview, tagline, voteAverage}
    
    try {
        const {createWLI} = await sendQuery(CREATE_WLI, variables)
        return formattedResponse(200, createWLI)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createWLI"})
    }
}