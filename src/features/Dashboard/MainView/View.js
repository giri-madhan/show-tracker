import React from 'react'
import Watched from '../MainView/WatchedList/WatchedEntryContainer'
import WatchList from '../MainView/WatchList/WatchEntryContainer'
import Stats from './Stats/StatsContainer'

const View = (props) => {
    const {mpData, wlData, isLoading, viewDisplay, setViewDisplay} = props
    
    return(
        <div id='display-container' style={{width: '100%'}}>
            {viewDisplay === 'watchList' ? <WatchList viewDisplay={viewDisplay} setViewDisplay={setViewDisplay} mpData={mpData} wlData={wlData} isLoading={isLoading} />
            : viewDisplay === 'watched' ? <Watched viewDisplay={viewDisplay} setViewDisplay={setViewDisplay} wlData={wlData} />
            : viewDisplay === 'stats' ? <Stats viewDisplay={viewDisplay} setViewDisplay={setViewDisplay} mpData={mpData} wlData={wlData} /> : null
            }
        </div>
    )
}
export default View