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
                {sortedGenres.splice(0,5).map((entry, i) => {
                    return (
                        <div key={i}>
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
            <div className='stats-info-container'>
                <div className='stat'>
                    <span className='stat-title'>
                        Movies in Watch List:
                    </span>
                    <span className='stat-info'>
                        {wlData.length}
                    </span>
                </div>
                <div className='stat'>
                    <span className='stat-title'>
                        Movies Watched:    
                    </span>
                    <span className='stat-info'>
                        {mpData.length}
                    </span>
                </div>
                <div className='stat'>
                    <span className='stat-title'>
                        Hours Spent:
                    </span>
                    <span className='stat-info'>
                        {calculateWatchTime()}
                    </span>
                </div>
                <div className='stat'>
                    <span className='stat-title'>
                        Favorite Genres:
                    </span>
                    <span className='stat-info'>
                        {calculateFavoriteGenres()}
                    </span>
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