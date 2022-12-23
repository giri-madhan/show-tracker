import React, {useState, useEffect} from 'react'
import DashHeader from '../../DashHeader/DashHeader'

const StatsContainer = (props) => {
    const {viewDisplay, setViewDisplay, mpData, wlData} = props

    const calculateWatchTime = () => {
        let timeInMinutes = 0
        mpData.forEach(item => timeInMinutes += item.duration)
        let hoursSpent = timeInMinutes / 60
        return hoursSpent.toFixed(2)
    }

    return(
        <div className='stats-container'>
            <DashHeader 
                viewDisplay={viewDisplay} 
                setViewDisplay={setViewDisplay} 
            />
            <div style={{paddingTop: 100, display: 'flex', flexDirection: 'column'}}>
                <span>
                    Movies in Watch List: {wlData.length}
                </span>
                <span>
                    Movies Watched: {mpData.length}
                </span>
                <span>
                    Hours Spent: {calculateWatchTime()}
                </span>
            </div>
        </div>
    )
}

export default StatsContainer