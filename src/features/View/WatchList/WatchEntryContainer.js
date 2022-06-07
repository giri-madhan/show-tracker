import React from 'react'
import WatchEntryCard from './WatchEntryCard'


export default class EntryContainer extends React.Component {

    render(){
        const {wlData, changeDisplay} = this.props

        return(
            <div style={{width: '100%', height: '100%'}}>
                <button onClick={changeDisplay}>Change View</button>

                <div className='wli-container'>
                    {wlData ? wlData.map( (wli, i) => {
                        return(
                            <WatchEntryCard wli={wli} key={i} />
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}