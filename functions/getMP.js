const axios = require('axios')
require('dotenv').config()
const {GET_MPs} = require('./utilities/mpQueries.js')
const sendQuery = require('./utilities/sendQuery')
const formattedResponse = require('./utilities/formattedResponse')

exports.handler = async(event) => {

  try {
    const res = await sendQuery(GET_MPs)
    const data = res.watchedItemsByUserID.data
    return formattedResponse(200, data)
  } catch(err){
    console.log(err)
    return formattedResponse(500, {err: 'Something Went Wrong'})
  }
}