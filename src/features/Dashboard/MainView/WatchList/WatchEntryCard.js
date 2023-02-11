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

const WatchEntryCard = ({wli, mpData}) => {
    const [overview, setOverview] = useState(false)
    const [watched, setWatched] = useState(false)
    const [rating, setRating] = useState(0)
    const [watchDate, setWatchDate] = useState('')
    const [watchCount, setWatchCount] = useState('')
    const [notes, setNotes] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [imgLoaded, setImgLoaded] = useState(false)
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

    return(
        <div style={{display: 'flex', width: '90%', justifyContent: 'center'}}>
            <div className='wli-card' onClick={() => setOverview(!overview)}>
                    <div id='wli-img-container' style={{marginRight: 20}}>
                        <img 
                            id='wli-img'
                            src={wli.photo !== null && imgLoaded ? imgSrc : defaultPoster} 
                            width={100} 
                            alt="" 
                            style={{borderRadius: '5px 0 0 5px'}}
                            onLoad={() => {
                                setImgSrc(posterPath+wli.photo)
                                setTimeout(() => {setImgLoaded(true)}, 500)
                            }}
                        />
                    </div>
                    {!watched ? (
                    <div id='wli-title-container' style={{ marginTop: 10}}>
                        <div id='wli-title' style={{color: '#fff', fontSize: 30, display: 'flex', position: 'relative'}}>
                            <span>{wli.name}</span>
                            <span id='wli-release-date' style={{marginLeft: 25}}>({wli.releaseDate ? wli.releaseDate.substring(0, 4) : null})</span>
                        </div>
                        <div id='wli-info-container' style={{marginTop: 15, fontSize: 24, color: '#bbb'}}>
                            {!overview ? (
                                <div id='wli-info'>
                                    <div id='wli-t1' style={{color: '#f5c518'}}>{wli.voteAverage}/10 (IMDb)</div>
                                    <div id='wli-t2'>{wli.duration} Minutes</div>
                                    <div id='wli-genre'>{wli.genre}</div>
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