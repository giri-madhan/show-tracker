import React from 'react'
import defaultPoster from '../../../icons/default_poster.jpg'
import { generateGenre } from '../../../utils/getGenre'

const SearchCard = ({result, addToWatchList}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'

    return(
        <div className='search-card-outer-box'>
            <img src={result.poster_path !== null ? posterPath+result.poster_path : defaultPoster} width={85} alt="" style={{borderRadius: '5px 0 0 5px'}} />
            <div className='search-card-inner-box' style={{width: '100%'}}>
                
                    <div className='search-card-title'>{result.title}</div>
                    {generateGenre(result.genre_ids)}
                    {result.release_date.substring(0,4)}
                    {result.original_language.toUpperCase()}
                
            </div>
            <button className='add-to-watchlist-btn' onClick={() => addToWatchList(result)}>+</button>
        </div>
    )
}

export default SearchCard