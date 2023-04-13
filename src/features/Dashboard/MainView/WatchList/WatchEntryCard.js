import React, {useState} from 'react'
import axios from 'axios'
import checkIcon from '../../../../icons/check.png'
import deleteIcon from '../../../../icons/delete.png'
import backIcon from '../../../../icons/back.png'
import CreateCard from '../../Create/CreateCard'
import defaultPoster from '../../../../icons/default_poster.jpg'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../../../redux/watchlist'
import { failToast, successToast } from '../../../Toasts/toasts'
import { useEffect } from 'react'
import formatRatingStyle from '../../../../utils/formatRatingStyle'

const WatchEntryCard = ({wli, mpData}) => {
    const [overview, setOverview] = useState(false)
    const [watched, setWatched] = useState(false)
    const [rating, setRating] = useState(0)
    const [watchDate, setWatchDate] = useState('')
    const [watchCount, setWatchCount] = useState('')
    const [notes, setNotes] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [imgLoaded, setImgLoaded] = useState(false)
    const [whereToWatch, setWhereToWatch] = useState([])
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const dispatch = useDispatch()

    const deleteWLI = (id) => {
        axios.delete(`/api/deleteWLI`, {data: {id}}).then(res => {
            dispatch(deleteItem(id))
            successToast(`${wli?.name || 'Item'} Removed From Watch List`)
        }).catch(err => {
            failToast('Failed to Delete Item')
            console.log(err)
        })
    }

    const openWatchedForm = () => {
        setWatched(true)
    }

    const addToWatched = (item) => {
        const data = {
            name: item.name,
            rating: +rating || 0,
            genre: item.genre,
            movieID: item.movieID,
            releaseDate: item.releaseDate,
            watchDate: watchDate,
            duration: item.duration,
            watchCount: item.watchCount || 1,
            prodCompany: item.prodCompany,
            photo: item.photo,
            notes
        }
        const inList = mpData.filter( mp => mp.movieID === item.movieID).length > 0
        
        if (inList) {
            failToast('Already in Watched List')
            resetForm()
        } else {
            if (data.rating !== undefined && data.watchDate) {
                axios.post(`/api/createMP`, JSON.stringify(data))
                    .then(res => {
                        deleteWLI(item._id)
                        successToast('Successfully Added to Watched List')
                        //do a redux dispatch here to keep things updated?
                    })
                    .catch(err => {
                        failToast('Item not added.')
                        console.log(err)
                    })
                resetForm()
            } else {
                alert('Please enter Watch Date and Rating.')
            }
        }
    }

    const resetForm = () => {
        setWatchDate('')
        setRating(0)
        setNotes('')
        setWatched(false)
    }

    const closeWatchedForm = () => {
        resetForm()
    }

    useEffect( () => {
        axios.get(`https://api.themoviedb.org/3/movie/${wli.movieID}/watch/providers?api_key=4524058d1b58bdbc0fa9f7631e0d6e02`)
        .then( d => {
            if (!d.message) {
                setWhereToWatch(d.data.results.US)
            }
        })
        .catch(e => e.message)
    }, [wli])

    return(
        <div style={{display: 'flex', width: '90%', justifyContent: 'center'}}>
            <div className='wli-card' onClick={() => setOverview(!overview)}>
                    <div id='wli-img-container'>
                        <img 
                            id='wli-img'
                            src={wli.photo !== null && imgLoaded ? imgSrc : defaultPoster} 
                            width={110}
                            height={'100%'}
                            alt="" 
                            style={{borderRadius: '5px 0 0 5px'}}
                            onLoad={() => {
                                setImgSrc(posterPath+wli.photo)
                                setTimeout(() => {setImgLoaded(true)}, 500)
                            }}
                        />
                    </div>
                    {!watched ? (
                    <div id='wli-title-container' style={{ marginTop:2}}>
                        <div id='wli-title'>
                            <span>{wli.name}</span>
                            <span id='wli-release-date'>
                                ({wli.releaseDate ? wli.releaseDate.substring(0, 4) : null})
                            </span>
                        </div>
                        <div id='wli-info-container'>
                            {!overview ? (
                                <div id='wli-info'>
                                    <div id='wli-t1'>
                                        <span style={{color: formatRatingStyle(wli.voteAverage)}}>
                                            {wli.voteAverage}/10
                                        </span>
                                        <span> (IMDb) </span>
                                        <span>| {wli.duration} Minutes</span>
                                        <span> | {wli.genre.split(',').slice(0,2).join(',')}</span>
                                    </div>
                                    {whereToWatch?.flatrate?.length > 0 ? (
                                    <div id='wli-where-to-watch'>
                                        <span 
                                            className='center'
                                            style={{
                                                height: 50, 
                                                background: '#111',
                                                padding: 2,
                                                borderRadius:5
                                            }}
                                        >
                                            Stream:
                                        </span>
                                        {whereToWatch?.flatrate?.slice(0, 5).map((a,i) => {
                                            return (
                                                <img 
                                                    key={i} 
                                                    src={posterPath + a.logo_path} 
                                                    height={50}
                                                    style={{borderRadius: 5}}
                                                    alt=''
                                                />
                                            )
                                        })}
                                    </div>
                                    ) : whereToWatch?.rent?.length > 0 ? (
                                        <div id='wli-where-to-watch'>
                                            <span 
                                                className='center'
                                                style={{
                                                    height: 50, 
                                                    background: '#111',
                                                    padding: 2,
                                                    borderRadius:5
                                                }}
                                            >
                                                Rent:
                                            </span>
                                            {whereToWatch?.rent?.slice(0, 5).map((a,i) => {
                                                return (
                                                    <img 
                                                        key={i} 
                                                        src={posterPath + a.logo_path} 
                                                        height={50}
                                                        style={{borderRadius: 5}}
                                                    />
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div id='wli-where-to-watch'>
                                            <span 
                                                className='center'
                                                style={{
                                                    height: 50, 
                                                    padding: 5
                                                }}
                                            >
                                                No Platforms Found
                                            </span>
                                            
                                        </div>
                                    )}
                                </div>
                                ) : (
                                <div id='wli-overview' style={{fontSize: 18, padding: 5, paddingRight: 25, marginTop: -10}}>
                                    {wli.overview}
                                </div>
                                )}
                        </div>
                    </div> 
                    ) : (
                        <CreateCard 
                            item={wli} 
                            notes={notes} 
                            setNotes={setNotes} 
                            rating={rating} 
                            setRating={setRating} 
                            watchDate={watchDate} 
                            setWatchDate={setWatchDate} 
                            watchCount={watchCount} 
                            setWatchCount={setWatchCount} 
                        />
                    )}
            </div>
            <div id='action-btn-container'>
                <button className='complete-btn' 
                    onClick={!watched ? () => openWatchedForm() : () => addToWatched(wli)} 
                    style={{height: 60, borderRadius: 100}}
                >
                    <img src={checkIcon} width={45} alt='add to watched list'/>
                </button>
                <button className='delete-btn' onClick={!watched ? () => deleteWLI(wli._id): () => closeWatchedForm()} style={{height: 60, borderRadius: 150}}>
                    <img src={!watched ? deleteIcon : backIcon} width={45} alt='remove from watch list'/>
                </button>
            </div>
        </div>
    )
}

export default WatchEntryCard