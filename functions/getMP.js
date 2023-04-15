const axios = require('axios')
require('dotenv').config()
const sendQuery = require('./utilities/sendQuery')
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async(event) => {
  const {userID} = JSON.parse(event.body)
  try {

    const GET_MPs = `
    query {
      watchedItemsByUserID (user_id: "${userID}") {
          data {
          user_id
          watchedList {
            data {
              duration
              releaseDate
              name
              genre
              photo
              prodCompany
              _id
              language
              rating
              watchDate
              notes
              owner {
                name
                user_id
              }
              movieID
              watchCount
            }
          }
          }
      }
  }`

    const res = await sendQuery(GET_MPs)
    const data = res.watchedItemsByUserID.data
    return formattedResponse(200, data)
  } catch(err){
    console.log(err)
    return formattedResponse(500, {err: 'Something Went Wrong'})
  }
}