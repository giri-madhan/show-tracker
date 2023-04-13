require('dotenv').config()
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')


exports.handler = async (event) => {

    
    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {name, genre, movieID, releaseDate, duration, prodCompany, photo, overview, tagline, voteAverage, owner} = JSON.parse(event.body)

    const CREATE_WLI = `mutation {
        createWatchItem(data: {
            name:"${name}"
            genre:"${genre}"
            releaseDate:"${releaseDate}"
            duration:${duration}
            movieID:${movieID}
            prodCompany:"${prodCompany || ''}"
            photo:"${photo}"
            overview:"${overview}"
            tagline:"${tagline}"
            voteAverage:${voteAverage}
            owner: {
                connect: ${owner.connect}
            }
        }) {
        name
        genre
        movieID
        priority
        releaseDate
        duration
        prodCompany
        photo
        overview
        tagline
        voteAverage
        owner {
        user_id
        }
        }
        }`
    try {
        const {createWLI} = await sendQuery(CREATE_WLI)
        return formattedResponse(200, createWLI)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createWLI"})
    }
}