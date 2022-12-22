import React from 'react'
import Watched from '../MainView/WatchedList/WatchedEntryContainer'
import WatchList from '../MainView/WatchList/WatchEntryContainer'
import DataChart from './ChartView/DataChart'

const View = (props) => {
    const {mpData, wlData, isLoading, viewDisplay, setViewDisplay} = props
    
    return(
        <div style={{width: '100%'}}>
                {viewDisplay === 'watchList' ? <WatchList viewDisplay={viewDisplay} setViewDisplay={setViewDisplay} mpData={mpData} wlData={wlData} isLoading={isLoading} />
                : viewDisplay === 'watched' ? <Watched viewDisplay={viewDisplay} setViewDisplay={setViewDisplay} wlData={wlData} />
                : viewDisplay === 'charts' ? <DataChart setViewDisplay={setViewDisplay} /> : null
                }
            </div>
    )
}
export default View