import React from 'react'
import WatchedEntryCard from './WatchedEntryCard'
import minimal from '../../../../icons/minimal.png'
import robust from '../../../../icons/robust.png'

export default class EntryContainer extends React.Component {
    state={
        cardView: 'robust'
    }

    changeView = (type) => this.setState(() => ({cardView: type}))

    render(){
        const {changeDisplay, view} = this.props

        return(
            <div className='watched-entry-container'>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <button className='change-view-btn' onClick={changeDisplay}>{view === 'watched' ? 'View Watch List' : null}</button>
                    <h1 style={{color: '#fff'}}>{view === 'watched' ? 'Watched History' : null}</h1>
                    <div className='btn-pill'>
                        <button onClick={() => this.changeView('robust')} style={{background: this.state.cardView === 'robust' ? '#cff' : null}}>
                            <img src={robust} width={40} alt=''/>
                        </button>
                        <button onClick={() => this.changeView('minimal')} style={{background: this.state.cardView === 'minimal' ?  '#cff' : null}}>
                            <img src={minimal} width={40} alt=''/>
                        </button>
                    </div>
                </div>
               <div>
                   {this.props.mpData.map( (mp, i) => (
                       <WatchedEntryCard mp={mp} key={i} cardView={this.state.cardView}  />
                   ))}
               </div>
            </div>
        )
    }
}