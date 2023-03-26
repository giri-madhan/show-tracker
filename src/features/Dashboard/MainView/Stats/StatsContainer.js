import React from 'react'
import DashHeader from '../../DashHeader/DashHeader'
import GenrePieChart from './Charts/GenrePieChart'
import StatsCard from './StatsCard'
import formatRatingStyle from '../../../../utils/formatRatingStyle'

const StatsContainer = (props) => {
    const {viewDisplay, setViewDisplay, mpData, wlData} = props

    const calculateWatchTime = () => {
        let timeInMinutes = 0
        mpData.forEach(item => timeInMinutes += item.duration)
        let hoursSpent = timeInMinutes / 60
        return hoursSpent.toFixed(0)
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

    const calculateNumOfMovies =  (frequency) => {

        return mpData.filter( m => {
            const watchedDate = new Date(m.watchDate)
            const pastDate =  new Date(new Date() - frequency)
            return watchedDate > pastDate
        }).length + ' watched'
    }

    const calculateLastThreeWatched = () => {
        const lastThreeMovieObjects = mpData.slice(mpData.length - 3)
        return lastThreeMovieObjects.map( m => {
            return (
             <div style={{display: 'flex', justifyContent: 'center', width: '100%', gap: 5}}>
                <span>{m.name}</span>
                <span style={{marginLeft: 'auto', color: formatRatingStyle(m.rating)}} >{m.rating + '/10'}</span>
            </div>
            )
        })
    }

    const last3style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }

    
    return(
        <div className='stats-container'>
            <DashHeader 
                viewDisplay={viewDisplay} 
                setViewDisplay={setViewDisplay} 
            />
            <div className='stats-info-container'>
                <StatsCard title='Movies in Watch List' data={wlData.length} />
                <StatsCard title='Movies Watched' data={mpData.length} />
                <StatsCard title='Hours Watched' data={calculateWatchTime()} />
                <StatsCard title='Favorite Genres' data={calculateFavoriteGenres()} />
                <StatsCard title='Last 30 Days' data={calculateNumOfMovies(2592000000)} />
                <StatsCard title='Last 7 Days' data={calculateNumOfMovies(604800000)} />
                <StatsCard title='Last 3 Watched' data={calculateLastThreeWatched()} formatStyle={last3style} />
                
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