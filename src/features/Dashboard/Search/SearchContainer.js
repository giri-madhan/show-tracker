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

    generateGenre = (ids) => {
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
        return genres.map( g => <span style={{marginRight: 5}}>{g}</span>)
    }

    addToWatchList = (item) => {

        axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=4524058d1b58bdbc0fa9f7631e0d6e02`).then(res =>{ 
            console.log(res.data)
            const genreString = res.data.genres.map( g => {
                return g.name
            })
            const finalGenreString = genreString.toString().replace(/,/g, ', ')
            const finalVoteAverage = +res.data.vote_average.toFixed(0)
            const data = {
                name: res.data.title,
                genre: finalGenreString,
                releaseDate: res.data.release_date,
                duration: res.data.runtime,
                photo: res.data.poster_path,
                overview: res.data.overview,
                tagline: res.data.tagline,
                voteAverage: finalVoteAverage
            }
            axios.post('/api/createWLI', data).then(res => console.log(res)).catch(err => console.log('Error creating WLI', err))
        })

        
    }

    render(){
        const posterPath = 'https://image.tmdb.org/t/p/original'
        return(
            <div style={{width: '30%', height: '94.5%', border: '1px solid black', overflowY: 'scroll'}}>
                <input type='text' value={this.state.searchQuery} onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder='Search Movie' />
                <button onClick={this.getMovies} >Get Movies</button>
                <div style={{display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                    {this.state.searchResults !== null ? this.state.searchResults.map( (result, i) => {
                        return (
                            <div style={{width: '85%', height: 130, background: '#171515', display: 'flex', borderRadius: 5, boxShadow: '0 0 5px #000'}} key={i}>
                                <img src={posterPath+result.poster_path} width={85} alt="" style={{borderRadius: '5px 0 0 5px'}} />
                                <div style={{width: '100%'}}>
                                    <div style={{display: 'flex', flexDirection: 'column', color: '#fff', width: '100%'}}>
                                        <div style={{textAlign: 'center', marginBottom: 2, background: '#86242a'}}>
                                            <span style={{fontSize: 18}}>{result.title}</span>
                                        </div>
                                        <span style={{paddingLeft: 20}}>
                                            <span style={{fontWeight: 700}}>Genres: </span> 
                                            <span style={{color: '#aaa'}}>{this.generateGenre(result.genre_ids)}</span>
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
                                <button onClick={() => this.addToWatchList(result)} style={{background: 'lightgreen', border: 'none', borderRadius: '0 5px 5px 0', width: 50, fontSize: 20}}>+</button>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}