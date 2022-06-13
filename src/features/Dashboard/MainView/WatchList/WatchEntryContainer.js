import axios from 'axios'
import React from 'react'
import WatchEntryCard from './WatchEntryCard'


export default class EntryContainer extends React.Component {
    state={
        watchList: []
    }

    componentDidMount(){
        axios.get('/api/getWLI').then(res => this.setState({watchList: res.data}))
        // change this to fetch only if state changes and on first mount
    }

    getAllWLI = () => {
        axios.get('/api/getWLI').then(res => {
            this.setState({watchList: res.data})
        })
    }

    render(){
        const {wlData, changeDisplay, view, mpData} = this.props
        const {watchList} = this.state

        return(
            <div style={{width: '100%', height: '100%', overflowY: 'auto'}}>
                <button className='change-view-btn' onClick={changeDisplay}>{view === 'watchList' ? 'View Watched' : null}</button>
                <div className='wli-container'>
                    {watchList ? watchList.map( (wli, i) => {
                        return(
                            <WatchEntryCard wli={wli} key={i} mpData={mpData} getItems={this.getAllWLI} />
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}