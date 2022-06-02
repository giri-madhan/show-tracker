const axios = require('axios')
require('dotenv').config()

exports.handler = async(event) => {
    const GET_MPs = `
    query FindAllMPs{
        allMPs{
          data {
            _id
            name
            rating
            genre
            releaseDate
            watchDate
            duration
            watchCount
            prodCompany
            photo
            notes
          }
        }
      }
    `
    const {data} = await axios({
        url: 'https://graphql.us.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query: GET_MPs,
            variables: {}
        }
    })
    console.log(data)
    return {statusCode: 200, body: JSON.stringify(data)}
}