import React from 'react'
import Watched from '../MainView/WatchedList/WatchedEntryContainer'
import WatchList from '../MainView/WatchList/WatchEntryContainer'
import DataChart from './ChartView/DataChart'

export default class View extends React.Component {
    state = {
        display: 'watchList'
    }

    changeView = (arg) => {
        if (this.state.display === 'watchList') this.setState({display: 'watched'})
        if (this.state.display === 'watched') this.setState({display: 'watchList'})
        if (arg === 'charts') this.setState({display: 'charts'})
    }

    render(){
        const {display} = this.state
        const {mpData, wlData, isLoading} = this.props
        
        return(
            <div style={{width: '100%'}}>
                {display === 'watchList' ? <WatchList view={display} changeDisplay={this.changeView} mpData={mpData} wlData={wlData} isLoading={isLoading} />
                : display === 'watched' ? <Watched view={display} changeDisplay={this.changeView} wlData={wlData} />
                : display === 'charts' ? <DataChart changeDisplay={this.changeView} /> : null
                }
            </div>
        )
    }
}