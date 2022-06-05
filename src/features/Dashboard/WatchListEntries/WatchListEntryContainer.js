import React from 'react'
import EntryCard from './WatchListEntryCard'
import axios from 'axios'

export default class EntryContainer extends React.Component {

    getAll = () => {
        console.log('get mps')
    }


    render(){

        return(
            <div style={{width: '80%', height: '100%', border: '1px solid black'}}>
                Entry Container
                <div style={{display: 'flex', gap: 40}}>
                <div style={{display: 'flex'}}>
                    <button>List View</button>
                    <button>Card View</button>
                </div>
                <h1>Watch List</h1>
                </div>
                <button onClick={this.getAll}>Get All</button>
            </div>
        )
    }
}