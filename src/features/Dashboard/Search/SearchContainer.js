import React, {useState} from 'react'
import SearchCard from './SearchCard'
import axios from 'axios'
import { failToast, successToast } from '../../Toasts/toasts'
import { useSelector } from 'react-redux'

const SearchContainer = (props) => {
    const [state, setState] = useState({
        searchQuery: '',
        searchResults: null
    })
    const userInformation = useSelector(state => state.user.user)

    const getMovies = (e) => {
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_SECRET_KEY}&language=en-US&query=${state.searchQuery}`)
        .then(res => {
          setState({searchResults: res.data.results})
        })
    }

    const clearSearch = () => {
        setState(s => ({searchQuery: '', searchResults: null}))
    }

   const addToWatchList = (item) => {
        const {wlData, addToRedux, getWLIs, viewDisplay, setViewDisplay} = props

        axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${process.env.REACT_APP_TMDB_SECRET_KEY}`)

        .then(res =>{ 
            const genreString = res.data.genres.map( g => {
                return g.name
            })
            const finalGenreString = genreString.toString().replace(/,/g, ', ')
            const finalVoteAverage = +res.data.vote_average.toFixed(0)
            const data = {
                name: res.data.title,
                genre: finalGenreString,
                releaseDate: res.data.release_date,
                movieID: res.data.id,
                duration: res.data.runtime,
                photo: res.data.poster_path,
                overview: res.data.overview,
                tagline: res.data.tagline,
                voteAverage: finalVoteAverage,
                owner: {
                    connect: userInformation?.[0]?._id 
                }
            
            }

            const arrCheck = []
            wlData.forEach(item => {
                arrCheck.push(item.movieID)
            })
            
            if (arrCheck.includes(data.movieID)) {
                failToast('Already in your Watch List')
            } else {
                axios.post('/api/createWLI', data).then(res => {
                    addToRedux(data)
                    successToast('Watch List Item Added')
                    if (viewDisplay !== 'watchList') setViewDisplay('watchList')
                    getWLIs() //gets updated list of backend items. Needed this to assign fauna id to wli to delete.
                }).catch(err => {
                    failToast('Failed to Add Watch List Item')
                })
                setState(s => ({searchQuery: '', searchResults: null}))
            } 
        })
    }
    const {searchQuery, searchResults} = state
        return(
            <div className={`search-container ${searchResults === null ? 'empty' : ''}`}> 
                <div className='sticky' style={{width: '100%', display: 'flex', height: 70, padding: 20}}>
                    <form style={{display: 'flex', width: '100%'}} onSubmit={(e) => getMovies(e)}>
                        <input type='submit' style={{display: 'none'}} />
                        <input 
                            type='text' 
                            value={searchQuery} 
                            style={{width: '80%', minWidth: 150, fontSize: 20, borderRadius: 7}}
                            onChange={(e) => setState({searchQuery: e.target.value})} placeholder='Search Movies' 
                        />
                        {searchQuery !== '' ? <button tabIndex={-1} className='clear-search-btn' onClick={clearSearch}>X</button>: null}
                        <input type='submit' className='get-movies-btn' style={{width: '20%', marginLeft: 15}} value='Search' />
                    </form>
                </div>
                <div className='search-container-items'>
                    {searchResults !== null ? searchResults?.map( (result) => (
                            <SearchCard result={result} addToWatchList={addToWatchList} key={result.id}/>
                        )
                    ) : <div style={{color: '#fff', fontSize: 20}}>No search results.</div>}
                </div>
            </div>
        )
    }

    export default SearchContainer
