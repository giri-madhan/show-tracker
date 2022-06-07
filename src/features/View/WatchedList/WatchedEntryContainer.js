import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'

export default class EntryContainer extends React.Component {

    


    render(){
        console.log('watched', this.props.mpData)

        return(
            <div style={{width: '100%', height: '100%'}}>
               Watched Entry Container
               <button onClick={this.props.changeDisplay} >Change View</button>
               <div style={{display: 'grid', gridGap: 15, gridTemplateColumns: 'repeat(auto-fit, 400px)'}}>
                   {this.props.mpData.map( (mp) => (
                       <WatchedEntryCard mp={mp}  />
                   ))}
               </div>
            </div>
        )
    }
}