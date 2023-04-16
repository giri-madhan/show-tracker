require('dotenv').config()
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')


exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})

    const {name, rating, genre, movieID, releaseDate, watchDate, duration, watchCount, prodCompany, photo, notes, owner} = JSON.parse(event.body)
    
    try {
        const CREATE_MP = `
        mutation {
            createWatchedItem(data: {
              releaseDate: "${releaseDate}",
              name: "${name}",
              genre: "${genre}",
              photo: "${photo}",
              rating: ${rating},
              watchDate: "${watchDate}",
              notes: "${notes}",
              movieID: ${movieID},
              watchCount: ${watchCount},
              duration: ${duration},
              prodCompany: "${prodCompany || ''}",
              owner: {
                connect: "${owner.connect}"
            }
            }) {
              duration
              releaseDate
              name
              genre
              photo
              prodCompany
              language
              rating
              watchDate
              notes
              owner {
                user_id
              }
              movieID
              watchCount
            }
          }`
        const {createMP} = await sendQuery(CREATE_MP)
        return formattedResponse(200, createMP)
    } catch (err){
        return formattedResponse (500,{err: "Something went wrong with createMP"})
    }
}