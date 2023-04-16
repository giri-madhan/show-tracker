const axios = require('axios')
require('dotenv').config()
const sendQuery = require('./utilities/sendQuery')
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async(event) => {
  const {userID} = JSON.parse(event.body)

  try {
    const GET_WLIs = `
    query {
        watchItemsByUserID (user_id: "${userID}") {
            data {
            user_id
            watchList {
                data {
                    _id
                    name
                    genre
                    movieID
                    releaseDate
                    duration
                    prodCompany
                    photo
                    overview
                    tagline
                    voteAverage
                }
            }
            }
        }
    }
    `
    const res = await sendQuery(GET_WLIs)
    const data = res.watchItemsByUserID.data
    return formattedResponse(200, data)
  } catch(err){
    return formattedResponse(500, {err: 'Something Went Wrong Getting Watch List'})
  }
}