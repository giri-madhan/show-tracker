import React, {useState} from 'react'
import WatchEntryCard from './WatchEntryCard'
import Modal from 'react-modal'
import filterIcon from '../../../../icons/filter.png'
import { useSelector } from 'react-redux'
import GenreFilterBtns from './GenreFilterButtons'
import Spinner from '../../../Spinners/Spinner'

const EntryContainer = (props) => {
    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const watchListItems = useSelector(s => s.wlis.list)
    const [filteredList, setFilteredList] = useState([])
    const {changeDisplay, view, mpData, isLoading} = props

    const toggleModal = () => {
        filterModalOpen ? setFilterModalOpen(s => false) 
        : setFilterModalOpen(s => true)
    }
    
    const getDisplayList = () => {
        if (filteredList.length > 0) {
            return filteredList
        } else if (filteredList.length === 0) {
            return watchListItems
        }
    }

        return(
            <div className='watch-list-container'>
                <Modal isOpen={filterModalOpen} className='watch-list-modal' overlayClassName='watch-list-modal-overlay' ariaHideApp={false}>
                    <div style={{display: 'flex', background: '#313131', height: 50, alignItems: 'center' }}>
                        <span style={{ color: '#fff', fontWeight: 700, fontSize: 26, margin:'0 auto'}}>Select Filter</span>
                        <button className='close-filter-btn' onClick={toggleModal}>X</button>
                    </div>
                    <GenreFilterBtns 
                        watchListItems={watchListItems} 
                        setFilterModalOpen={setFilterModalOpen}
                        setFilteredList={setFilteredList}
                    />
                </Modal>
                <div style={{display: 'flex', alignItems: 'center', height: 80, margin: '0 50px', padding: '10px 0'}}>
                    <h1 style={{color: '#fff'}}>{view === 'watchList' ? 'Watch List' : null}</h1>
                    <div style={{display: 'flex', marginLeft: 'auto',alignItems: 'center', gap: 20}}>
                        <button className='filter-btn' onClick={toggleModal}>
                            <img src={filterIcon} width={45} style={{marginTop: 2}} alt='filter results'/>
                        </button>
                        <button className='change-view-btn' onClick={changeDisplay}>{view === 'watchList' ? 'View Watched' : null}</button>
                    </div>
                </div>
                <div className='wli-container'>
                    { getDisplayList() ? getDisplayList().slice(0).reverse().map( wli => (
                        <WatchEntryCard wli={wli} key={wli._id} mpData={mpData} isLoading={isLoading} />  
                    )) : (
                        <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Spinner type='circle' />
                        </div>    
                    )}
                </div>
            </div>
        )
    }
    export default EntryContainer