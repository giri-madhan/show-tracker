import React from 'react'
import DashHeader from '../../DashHeader/DashHeader'
import GenrePieChart from './Charts/GenrePieChart'

const StatsContainer = (props) => {
    const {viewDisplay, setViewDisplay, mpData, wlData} = props

    const calculateWatchTime = () => {
        let timeInMinutes = 0
        mpData.forEach(item => timeInMinutes += item.duration)
        let hoursSpent = timeInMinutes / 60
        return hoursSpent.toFixed(2)
    }

    const calculateFavoriteGenres = () => {
        let allMovieGenres = []
        mpData.forEach(movie => {
            const movieGenreArr = movie.genre.split(',')
            movieGenreArr.forEach(genre => {
                allMovieGenres.push(genre.trim())
            })
        })
        const genres =  allMovieGenres.reduce((allGenres, genre) => {
            const currCount = allGenres[genre] ?? 0
            return {
              ...allGenres,
              [genre]: currCount + 1,
            }
          }, {})
        const sortedGenres = Object.entries(genres).sort((a,b) => b[1] - a[1])
        
        return (
            <div>
                {sortedGenres.splice(0,5).map(entry => {
                    return (
                        <div style={{marginLeft: 20}}>
                            {entry[0] + ': ' + entry[1] + ' watched'}
                        </div>
                    )
                })}
            </div>
        )
    }

    return(
        <div className='stats-container'>
            <DashHeader 
                viewDisplay={viewDisplay} 
                setViewDisplay={setViewDisplay} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 100}}>
                <span>
                    Movies in Watch List: {wlData.length}
                </span>
                <span>
                    Movies Watched: {mpData.length}
                </span>
                <span>
                    Hours Spent: {calculateWatchTime()}
                </span>
                <div>
                    <span>Favorite Genres:</span>
                    <div>{calculateFavoriteGenres()}</div>
                    
                </div>
                {/* <div style={{display: 'flex', justifyContent: 'center', marginTop: 5}}>
                    <div id='chart-container'>
                        <GenrePieChart mpData={mpData} />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default StatsContainer