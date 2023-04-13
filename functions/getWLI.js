const axios = require('axios')
require('dotenv').config()
const sendQuery = require('./utilities/sendQuery')
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async(event) => {

  try {
    const res = await sendQuery(GET_WLIs)
    const data = res.watchItemsByUserID.data
    return formattedResponse(200, data)
  } catch(err){
    console.log(err)
    return formattedResponse(500, {err: 'Something Went Wrong Getting Watch List'})
  }
}