import axios from 'axios'
import React from 'react'
import WatchEntryCard from './WatchEntryCard'
import Modal from 'react-modal'
import filterIcon from '../../../../icons/filter.png'


export default class EntryContainer extends React.Component {
    state={
        filterModalOpen: false
    }

    toggleModal = () => {
        const {filterModalOpen} = this.state
        filterModalOpen ? this.setState(s => ({filterModalOpen: false})) 
        : this.setState(s => ({filterModalOpen: true}))
    }

    render(){
        const {changeDisplay, view, mpData, wlData, isLoading} = this.props
        const {filterModalOpen} = this.state

        return(
            <div className='watch-list-container' style={{width: '100%', height: '100%', overflowY: 'auto'}}>
                <Modal isOpen={filterModalOpen} className='watch-list-modal' overlayClassName='watch-list-modal-overlay'>
                        <div style={{display: 'flex', justifyContent: 'space-between', background: '#ccc', height: 50, alignItems: 'center' }}>
                            <span style={{padding: 5}}>Select Filter</span>
                            <button style={{padding: 5, marginRight: 5}} onClick={this.toggleModal}>X</button>
                        </div>
                        
                </Modal>
                <div style={{display: 'flex', gap: 160, alignItems: 'center'}}>
                    <button className='change-view-btn' onClick={changeDisplay}>{view === 'watchList' ? 'View Watched' : null}</button>
                    <h1 style={{color: '#fff'}}>{view === 'watchList' ? 'Watch List' : null}</h1>
                    <button className='filter-btn' onClick={this.toggleModal}>
                        <img src={filterIcon} width={45} style={{marginTop: 2}}/>
                    </button>
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