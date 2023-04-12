const axios = require('axios')
require('dotenv').config()
const {window} = require("./utilities/window")

module.exports = async (query, variables) => {
console.log("VARIABLES", variables)
    const {data: {data, errors}} = await axios({
        url: 'https://graphql.us.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query,
            variables
        }
    })
    
    if (errors) {
        console.log(errors)
        throw new Error('Something went wrong', errors)
    }
    return data

}