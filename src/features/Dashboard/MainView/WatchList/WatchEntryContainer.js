import axios from 'axios'
import React from 'react'
import WatchEntryCard from './WatchEntryCard'


export default class EntryContainer extends React.Component {

    render(){
        const {changeDisplay, view, mpData, wlData, isLoading} = this.props

        return(
            <div className='watch-list-container' style={{width: '100%', height: '100%', overflowY: 'auto'}}>
                <div style={{display: 'flex', gap: 160}}>
                    <button className='change-view-btn' onClick={changeDisplay}>{view === 'watchList' ? 'View Watched' : null}</button>
                    <h1 style={{color: '#fff'}}>{view === 'watchList' ? 'Watch List' : null}</h1>
                </div>
                <div className='wli-container'>
                    {wlData ? wlData.map( (wli, i) => {
                        return(
                            <WatchEntryCard wli={wli} key={i} mpData={mpData} getItems={this.getAllWLI} isLoading={isLoading} />
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}