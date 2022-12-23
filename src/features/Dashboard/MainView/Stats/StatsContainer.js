import React, {useState, useEffect} from 'react'
import DashHeader from '../../DashHeader/DashHeader'

const StatsContainer = (props) => {
    const {viewDisplay, setViewDisplay} = props

    return(
        <div className='stats-container'>
            <DashHeader 
                viewDisplay={viewDisplay} 
                setViewDisplay={setViewDisplay} 
            />
        </div>
    )
}

export default StatsContainer