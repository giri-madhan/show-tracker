import React, { useEffect } from 'react'
import WatchedEntryCard from './WatchedEntryCard'
import DashHeader from '../../DashHeader/DashHeader'
import { useDispatch, useSelector } from 'react-redux'

const EntryContainer = (props) => {
    const {setViewDisplay, viewDisplay} = props
    const dispatch = useDispatch()
    const watchedItems = useSelector(state => state.mps.list[0]?.watchedList?.data)
    

    return(
        <div className='display-entry-container'>
            <DashHeader 
                    viewDisplay={viewDisplay} 
                    setViewDisplay={setViewDisplay} 
                />
            <div className='watched-entry-container'>
                {watchedItems?.slice(0)?.reverse()?.map((mp, i) => (
                    <WatchedEntryCard mp={mp} key={mp.movieID || mp._id || i}  />
                ))}
            </div>
        </div>
    )
}
export default EntryContainer