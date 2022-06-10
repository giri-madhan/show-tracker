import React from 'react'
import defaultPoster from '../../../icons/default_poster.jpg'

const SearchCard = ({result, addToWatchList}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const generateGenre = (ids) => {
        const genres = []
        ids.forEach( id => {
            switch (id) {
                case 28:
                    genres.push('Action')
                    break;
                case 12:
                    genres.push('Adventure')
                    break;
                case 16:
                    genres.push('Animation')
                    break;
                case 35:
                    genres.push('Comedy')
                    break;
                case 80:
                    genres.push('Crime')
                    break;
                case 99:
                    genres.push('Documentary')
                    break;
                case 18:
                    genres.push('Drama')
                    break;
                case 10751:
                    genres.push('Family')
                    break;
                case 14:
                    genres.push('Fantasy')
                    break;
                case 36:
                    genres.push('History')
                    break;
                case 27:
                    genres.push('Horror')
                    break;
                case 10402:
                    genres.push('Music')
                    break;
                case 9648:
                    genres.push('Mystery')
                    break;
                case 10749:
                    genres.push('Romance')
                    break;
                case 878:
                    genres.push('Science Fiction')
                    break;
                case 10770:
                    genres.push('TV Movie')
                    break;
                case 53:
                    genres.push('Thriller')
                    break;
                case 10752:
                    genres.push('War')
                    break;
                case 37:
                    genres.push('Western')
                    break;
                default:
                    break;
            }
        })
        return genres.map( (g, i) => <span key={i} style={{marginRight: 5}}>{g}</span>)
    }

    return(
        <div style={{width: '85%', height: 130, background: '#171515', display: 'flex', borderRadius: 5, boxShadow: '0 0 5px #000'}}>
            <img src={result.poster_path !== null ? posterPath+result.poster_path : defaultPoster} width={85} alt="" style={{borderRadius: '5px 0 0 5px'}} />
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', flexDirection: 'column', color: '#fff', width: '100%'}}>
                    <div style={{textAlign: 'center', marginBottom: 2, background: '#86242a'}}>
                        <span style={{fontSize: 18}}>{result.title}</span>
                    </div>
                    <span style={{paddingLeft: 20}}>
                        <span style={{fontWeight: 700}}>Genres: </span> 
                        <span style={{color: '#aaa'}}>{generateGenre(result.genre_ids)}</span>
                    </span>
                    <span style={{paddingLeft: 20, paddingTop: 4}}>
                        <span style={{fontWeight: 700}}>Release Date: </span> 
                        <span style={{color: '#aaa'}}>{result.release_date}</span>
                    </span>
                    <span style={{paddingLeft: 20, paddingTop: 4}}>
                        <span style={{fontWeight: 700}}>Original Language: </span> 
                        <span style={{color: '#aaa'}}>{result.original_language.toUpperCase()}</span>
                    </span>
                </div>
            </div>
            <button className='add-to-watchlist-btn' onClick={() => addToWatchList(result)}>+</button>
        </div>
    )
}

export default SearchCard