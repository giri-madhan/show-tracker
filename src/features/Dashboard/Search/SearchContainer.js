import React from 'react'
import SearchCard from './SearchCard'
import axios from 'axios'


export default class SearchContainer extends React.Component {
    state={
        searchQuery: '',
        searchResults: null
    }

    getMovies = () => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4524058d1b58bdbc0fa9f7631e0d6e02&language=en-US&query=${this.state.searchQuery}`)
        .then(res => {
          this.setState({searchResults: res.data.results})
        })
    }

    clearSearch = () => {
        this.setState(s => ({searchQuery: '', searchResults: null}))
    }

    addToWatchList = (item) => {
        const {wlData} = this.props

        axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=4524058d1b58bdbc0fa9f7631e0d6e02`).then(res =>{ 
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
                voteAverage: finalVoteAverage
            }

            const arrCheck = []
            //use .some
            wlData.forEach(item => {
                arrCheck.push(item.movieID)
            })
            
            if (arrCheck.includes(data.movieID)) {
                alert("Already in your watch list!") //create a toast
            } else {
                //create a toast
                axios.post('/api/createWLI', data).then(res => console.log(res)).catch(err => console.log('Error creating WLI', err))
                this.setState(s => ({searchQuery: '', searchResults: null}))
            }
            
        })
    }

    render(){
        const {searchQuery, searchResults} = this.state
        return(
            <div className='search-container'>
                <div className='sticky' style={{width: '100%', display: 'flex', height: 70, padding: 20}}>
                    <input 
                        type='text' 
                        value={searchQuery} 
                        style={{width: '60%', marginRight: 'auto', marginLeft: 20, minWidth: 100, fontSize: 20, borderRadius: 7}}
                        onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder='Search Movies' 
                    />
                    {searchQuery !== '' ? <button className='clear-search-btn' onClick={this.clearSearch}>X</button>: null}
                    <button className='get-movies-btn' onClick={this.getMovies}>Get Movies</button>
                </div>
                
                <div className='search-container-items' style={{display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                    {searchResults !== null ? searchResults.map( (result, i) => {
                        return (
                            <>
                                <SearchCard result={result} addToWatchList={this.addToWatchList} key={i}/>
                            </>
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}