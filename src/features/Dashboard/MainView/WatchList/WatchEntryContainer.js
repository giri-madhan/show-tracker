import axios from 'axios'
import React from 'react'
import WatchEntryCard from './WatchEntryCard'


export default class EntryContainer extends React.Component {
    state={
        watchList: []
    }

    componentDidMount(){
        axios.get('/api/getWLI').then(res => this.setState({watchList: res.data}))
    }

    componentDidUpdate(){
        console.log(this.state.watchList)
    }

    getAllWLI = () => {
        axios.get('/api/getWLI').then(res => {
            this.setState({watchList: res.data})
        })
    }

    render(){
        const {wlData, changeDisplay} = this.props

        return(
            <div style={{width: '100%', height: '100%', overflowY: 'auto'}}>
                <button onClick={changeDisplay}>Change View</button>

                <div className='wli-container'>
                    {this.state.watchList ? this.state.watchList.map( (wli, i) => {
                        return(
                            <WatchEntryCard wli={wli} key={i} getItems={this.getAllWLI} />
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}