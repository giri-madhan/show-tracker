require('dotenv').config()
const sendQuery = require("./utilities/sendQuery")
const formattedResponse = require('./utilities/formattedResponse')


exports.handler = async (event) => {

    if (event.httpMethod !== 'POST') return formattedResponse(405, {err: `${event.httpMethod} not supported`})
    const {user} = JSON.parse(event.body)
    
    try {
        const USER_QUERY = `
        mutation {
            createUser(data:{
              user_id: "${user.sub}",
              email: "${user.email}"
              emailVerified: ${user.email_verified}
              name: "${user.name}"
            }) {
              name
              user_id
              _id
              email
              emailVerified
            }
          }`
        const {createUser} = await sendQuery(USER_QUERY)
        return formattedResponse(200, createUser)
    } catch (err){
        console.log(err)
        return formattedResponse (500,{err: "Something went wrong with createMP"})
    }
}