import React from 'react'
import WatchEntryCard from './WatchEntryCard'

export default class EntryContainer extends React.Component {


    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>
                Watch List
                <button onClick={this.props.changeDisplay} >Change View</button>
            </div>
        )
    }
}