import React from 'react'
import DashHeaderItem from './DashHeaderItem'

const DashHeader = (props) => {
    
    return(
        <div className='dash-header'>
            <DashHeaderItem item='search' setDashView={props.setDashView}/>
            <DashHeaderItem item='view' setDashView={props.setDashView}/>
            <DashHeaderItem item='add' setDashView={props.setDashView}/>
        </div>
    )
}

export default DashHeader