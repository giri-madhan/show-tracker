const axios = require('axios')
require('dotenv').config()
const sendQuery = require('./utilities/sendQuery')
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async(event) => {
    const parsedBody = JSON.parse(event.body)
    const {userId} = parsedBody

    const USER_QUERY = `
    query {
        getUserByID(user_id: "${userId}") {
          data {
            _id
            emailVerified
            email
            user_id
            name
          }
        }
      }
    `

  try {
    const res = await sendQuery(USER_QUERY)
    const data = res.getUserByID.data
    return formattedResponse(200, data)
  } catch(err){
    return formattedResponse(500, {err: 'Something Went Wrong Getting User'})
  }
}