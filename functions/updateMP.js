require('dotenv').config()
const {UPDATE_MP} = require("./utilities/MPQueries")
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {_id:id, name, rating, genre, movieID, releaseDate, watchDate, duration, watchCount, prodCompany, photo, notes} = JSON.parse(event.body)
    const variables = {id, name, rating, genre, movieID, releaseDate, watchDate, duration, watchCount, prodCompany, photo, notes}
    try {
        const {updateMP} = await sendQuery(UPDATE_MP, variables)
        return formattedResponse(200, updateMP)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with updateMP"})
    }
}