import React, {useState} from 'react'
import defaultPoster from '../../../icons/default_poster.jpg'
import { generateGenre } from '../../../utils/getGenre'

const SearchCard = ({result, addToWatchList}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const [imgLoaded, setImgLoaded] = useState(false)
    const [resultImg, setResultImg] = useState('')

    return(
        <div className='search-card-outer-box'>
            <img 
                src={result?.poster_path !== null && imgLoaded ? resultImg : defaultPoster} 
                width={85} 
                id='search-card-img'
                alt="" 
                style={{borderRadius: '5px 0 0 5px'}} 
                onLoad={() => {
                    setImgLoaded(true)
                    setResultImg(posterPath + result?.poster_path)
                }}
            />
            <div className='search-card-inner-box' style={{width: '100%'}}>
                
                    <div className='search-card-title'>
                        {result?.title}
                    </div>
                    <div className='search-card-description'>
                        <div className='search-card-description-genres'>
                            {generateGenre(result?.genre_ids)}
                        </div>
                        <div className='search-card-description-dlv'>
                            <span>
                                {result?.release_date?.substring(0,4)}
                            </span>
                            <span>
                                {result?.original_language?.toUpperCase()}
                            </span>
                            <span>
                                {'IMDB: ' + result?.vote_average}
                            </span>
                        </div>
                    </div>
                    
                
            </div>
            <button className='add-to-watchlist-btn' onClick={() => addToWatchList(result)}>+</button>
        </div>
    )
}

export default SearchCard