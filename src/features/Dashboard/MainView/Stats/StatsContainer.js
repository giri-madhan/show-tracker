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
        return allMovieGenres.reduce((allGenres, genre) => {
            const currCount = allGenres[genre] ?? 0
            return {
              ...allGenres,
              [genre]: currCount + 1,
            }
          }, {})
    }
    
    calculateFavoriteGenres()

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