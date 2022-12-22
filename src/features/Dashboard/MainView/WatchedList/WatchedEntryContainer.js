import React, { useEffect } from 'react'
import WatchedEntryCard from './WatchedEntryCard'
import LogoutButton from '../../../Buttons/LogoutButton'
import { useDispatch, useSelector } from 'react-redux'
import {getMPs} from '../../../../redux/shows'

const EntryContainer = (props) => {
    const {changeDisplay, view} = props
    const dispatch = useDispatch()
    const watchedItems = useSelector(state => state.mps.list)

    useEffect(() => {
        dispatch(getMPs()) // rehydrates stale redux data after adding something to watched list
    }, [dispatch])
    

    return(
        <div className='watched-entry-container'>
            <div style={{display: 'flex', height: 80, alignItems: 'center', padding: '10px 0', margin: '0 50px'}}>
                <h1 style={{color: '#fff'}}>
                    {view === 'watched' && 'Watched History'}
                </h1>
                <div style={{display: 'flex', marginLeft: 'auto', alignItems: 'center', gap: 20}}>
                    <button 
                        className='change-view-btn'
                        style={{marginLeft: 'auto'}}
                        onClick={changeDisplay}>
                            {view === 'watched' && 'View Watch List'}
                    </button> 
                    <LogoutButton />
                </div>
            </div>
            <div>
                {watchedItems.slice(0).reverse().map((mp, i) => (
                    <WatchedEntryCard mp={mp} key={mp.movieID || mp._id || i}  />
                ))}
            </div>
        </div>
    )
}
export default EntryContainer