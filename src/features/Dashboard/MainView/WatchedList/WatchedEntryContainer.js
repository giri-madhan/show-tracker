import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'

export default class EntryContainer extends React.Component {

    render(){
        const {changeDisplay, view} = this.props

        return(
            <div className='watched-entry-container'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1 style={{color: '#fff', margin: '0 auto'}}>{view === 'watched' ? 'Watched History' : null}</h1>
                    <button className='change-view-btn' onClick={changeDisplay}>{view === 'watched' ? 'View Watch List' : null}</button>
                </div>
               <div>
                   {this.props.mpData.map( (mp, i) => (
                       <WatchedEntryCard mp={mp} key={i}  />
                   ))}
               </div>
            </div>
        )
    }
}