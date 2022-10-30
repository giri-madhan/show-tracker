import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'

export default class EntryContainer extends React.Component {

    render(){
        const {changeDisplay, view} = this.props

        return(
            <div className='watched-entry-container'>
                <div style={{display: 'flex', height: 80, alignItems: 'center', padding: '10px 0', margin: '0 50px'}}>
                    <h1 style={{color: '#fff'}}>
                        {view === 'watched' ? 'Watched History' : null}
                    </h1>
                    <button 
                        className='change-view-btn'
                        style={{marginLeft: 'auto'}}
                        onClick={changeDisplay}>
                            {view === 'watched' ? 'View Watch List' : null}
                    </button> 
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