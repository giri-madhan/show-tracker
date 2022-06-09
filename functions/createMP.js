require('dotenv').config()
const {CREATE_MP} = require("./utilities/mpQueries")
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')


exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {name, rating, genre, movieID, releaseDate, watchDate, duration, watchCount, prodCompany, photo, notes} = JSON.parse(event.body)
    const variables = {name, rating, genre, movieID, releaseDate, watchDate, duration, watchCount, prodCompany, photo, notes}
    
    try {
        const {createMP} = await sendQuery(CREATE_MP, variables)
        return formattedResponse(200, createMP)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createMP"})
    }
}