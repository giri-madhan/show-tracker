import React, {useEffect, useState} from 'react'
import axios from 'axios'
import checkIcon from '../../../../icons/check.png'
import deleteIcon from '../../../../icons/delete.png'
import CreateCard from '../../Create/CreateCard'
import defaultPoster from '../../../../icons/default_poster.jpg'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../../../redux/watchlist'
import { failToast, successToast } from '../../../Toasts/toasts'

const WatchEntryCard = ({wli, getItems, mpData, isLoading}) => {
    const [overview, setOverview] = useState(false)
    const [watched, setWatched] = useState(false)
    const [rating, setRating] = useState(0)
    const [watchDate, setWatchDate] = useState('')
    const [watchCount, setWatchCount] = useState('')
    const [notes, setNotes] = useState('')
    const [mpList, setmpList] = useState([])
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const dispatch = useDispatch()

    const deleteWLI = (id) => {
        axios.delete(`/api/deleteWLI`, {data: {id}}).then(res => {
            dispatch(deleteItem(id))
            successToast('Successfully Deleted Item')
        }).catch(err => {
            failToast('Failed to Delete Item')
            console.log(err)
        })
    }

    const openWatchedForm = (item) => {
        setWatched(true)
    }

    useEffect(() => {
        setmpList(mpData)
        //why is dependency causing error here?
    }, [mpList])

    const addToWatched = (item) => {
        const data = {
            name: item.name,
            rating: +rating,
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
        const inList = mpList.filter( mp => mp.movieID === item.movieID).length === 1
        
        if (inList) {
            failToast('Already in Watched List') //TODO this doesnt work properly
        } else {
            if (rating && watchDate) {
                axios.post(`/api/createMP`, JSON.stringify(data)).then(res => console.log(res)).catch(err => console.log(err))
                getItems()
                deleteWLI(item._id)
                successToast('Successfully Added to Watched List')
            } else {
                alert('Please enter Watch Date and Rating.')
            }
            
        }
    }

    const cancelWatchedForm = () => {
        setWatched(false)
    }

    return(
        <div style={{display: 'flex', width: '90%'}}>
            <div className='wli-card' onClick={() => setOverview(!overview)}>
                    <div style={{marginRight: 20}}>
                        <img src={wli.photo !== null ? posterPath+wli.photo : defaultPoster} width={100} alt="" style={{borderRadius: '5px 0 0 5px'}} />
                    </div>
                    <div style={{width: '90%', marginTop: 10}}>
                        <div style={{color: '#fff', fontSize: 30, display: 'flex', position: 'relative'}}>
                            <span>{wli.name}</span>
                            <span style={{marginLeft: 25}}>({wli.releaseDate ? wli.releaseDate.substring(0, 4) : null})</span>
                        </div>
                        <div style={{marginTop: 15, fontSize: 24, color: '#bbb'}}>
                            {!overview ? (
                                <>
                                    <div>{wli.voteAverage}/10</div>
                                    <div>{wli.duration} Minutes</div>
                                    <div>{wli.genre}</div>
                                </>) : <div style={{fontSize: 18, padding: 5, paddingRight: 25, marginTop: -10}}>{wli.overview}</div>}
                        </div>
                    </div>
            </div>
            <div style={{width: '10%', display: 'flex', flexDirection: 'column', position: 'relative', right: 30, gap: 40}}>
                <button className='complete-btn' 
                onClick={!watched ? () => openWatchedForm(wli) : () => addToWatched(wli)} 
                style={{height: 60, borderRadius: 100}}>
                    <img src={checkIcon} width={45} alt='add to watched list'/>
                </button>
                <button className='delete-btn' onClick={!watched ? () => deleteWLI(wli._id): () => cancelWatchedForm()} style={{height: 60, borderRadius: 150}}>
                    <img src={deleteIcon} width={45} alt='delete from watch list'/>
                </button>
            </div>
            {watched ? (
                <div className='watched-overlay'>
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
                </div>
            ) : null}
        </div>
    )
}

export default WatchEntryCard