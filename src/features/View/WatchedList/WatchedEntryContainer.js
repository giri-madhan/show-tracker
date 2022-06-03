import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'

export default class EntryContainer extends React.Component {


    render(){

        return(
            <div style={{width: '100%', height: '100%'}}>
               Watched Entry Container
               <button onClick={this.props.changeDisplay} >Change View</button>
            </div>
        )
    }
}