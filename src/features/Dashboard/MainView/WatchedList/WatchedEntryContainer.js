import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'

export default class EntryContainer extends React.Component {

    


    render(){
        const {changeDisplay, view} = this.props
        console.log(this.props)

        return(
            <div style={{width: '100%', height: '100%'}}>
               <button className='change-view-btn' onClick={changeDisplay}>{view === 'watched' ? 'View Watch List' : null}</button>
               <div style={{display: 'grid', gridGap: 15, gridTemplateColumns: 'repeat(auto-fit, 400px)'}}>
                   {this.props.mpData.map( (mp, i) => (
                       <WatchedEntryCard mp={mp} key={i}  />
                   ))}
               </div>
            </div>
        )
    }
}