const GET_WLIs = `
    query FindAllWLIs{
        allWLI{
          data {
            _id
            name
            genre
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
    `

    const CREATE_WLI = `
    mutation($name: String!, $genre: String, $releaseDate: String, $duration: Int, $prodCompany: String, $photo: String, $overview: String, $tagline: String, $voteAverage: Int) {
        createWatchListItem(data: {
            name: $name
            genre: $genre
            releaseDate: $releaseDate
            duration: $duration
            prodCompany: $prodCompany
            photo: $photo,
            overview: $overview,
            tagline: $tagline,
            voteAverage: $voteAverage
        }){
          name
          genre
          releaseDate
          duration
          prodCompany
          photo
          overview
          tagline
          voteAverage
        }
      }
    `

    const UPDATE_WLI = `
    mutation($id: ID!, $name: String!, $genre: String, $releaseDate: String, $duration: Int, $prodCompany: String, $photo: String, $overview: String, $tagline: String, $voteAverage: Int) {
        updateWatchListItem(id: $id, data: {name:$name, genre:$genre, releaseDate:$releaseDate, duration:$duration, prodCompany:$prodCompany, photo: $photo, $overview: String, $tagline: String, $voteAverage: Int}){
          _id
          name
          genre
          releaseDate
          duration
          prodCompany
          photo
          overview
          tagline
          voteAverage
        }
    }
    `

    const DELETE_WLI = `
    mutation($id: ID!){
        deleteWatchListItem(id: $id){
            _id
        }
    }
    `

    module.exports = {
        GET_WLIs,
        CREATE_WLI,
        UPDATE_WLI,
        DELETE_WLI
    }