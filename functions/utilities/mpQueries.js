const GET_MPs = `
    query FindAllMPs{
        allMPs{
          data {
            _id
            name
            rating
            genre
            movieID
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

    const CREATE_MP = `
    mutation($name: String!, $rating: Int, $movieID: Int, $genre: String, $releaseDate: String, $watchDate: String, $duration: Int, $watchCount: Int, $prodCompany: String, $photo: String, $notes: String) {
        createMotionPicture(data: {
            name: $name
            rating: $rating
            genre: $genre
            movieID: $movieID
            releaseDate: $releaseDate
            watchDate: $watchDate
            duration: $duration
            watchCount: $watchCount
            prodCompany: $prodCompany
            photo: $photo
            notes: $notes
        }){
          name
          rating
          genre
          movieID
          releaseDate
          watchDate
          duration
          watchCount
          prodCompany
          photo
          notes
        }
      }
    `

    const UPDATE_MP = `
    mutation($id: ID!, $name: String!, $rating: Int, $movieID: Int, $genre: String, $releaseDate: String, $watchDate: String, $duration: Int, $watchCount: Int, $prodCompany: String, $photo: String, $notes: String) {
        updateMotionPicture(id: $id, data: {name:$name, rating:$rating, movieID:$movieID, genre:$genre, releaseDate:$releaseDate, watchDate:$watchDate, duration:$duration, watchCount:$watchCount, prodCompany:$prodCompany, photo: $photo, notes: $notes}){
          _id
          name
          rating
          genre
          movieID
          releaseDate
          watchDate
          duration
          watchCount
          prodCompany
          photo
          notes
        }
    }
    `

    const DELETE_MP = `
    mutation($id: ID!){
        deleteMotionPicture(id: $id){
            _id
        }
    }
    `

    module.exports = {
        GET_MPs,
        CREATE_MP,
        UPDATE_MP,
        DELETE_MP
    }