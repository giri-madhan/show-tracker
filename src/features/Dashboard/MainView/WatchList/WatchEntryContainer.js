import React, {useState, useEffect} from 'react'
import WatchEntryCard from './WatchEntryCard'
import Modal from 'react-modal'
import filterIcon from '../../../../icons/filter.png'
import { useSelector } from 'react-redux'
import GenreFilterBtns from './GenreFilterButtons'
import { genreList } from '../../../../utils/getGenre'

const EntryContainer = (props) => {
    const [filterModalOpen, setFilterModalOpen] = useState(false)
    const watchListItems = useSelector(s => s.wlis.list)
    const [watchList, setWatchList] = useState(null)
    const {changeDisplay, view, mpData, wlData, isLoading} = props

    useEffect(() => {
        setWatchList(watchListItems)
    }, [watchListItems])

    const filterResults = (option) => {
        option = option.toLowerCase()
        let w = [...watchListItems]
        if (option === 'dateasc') {
            setWatchList(w.sort((a, b)=> new Date(b.releaseDate) - new Date(a.releaseDate)))
            setFilterModalOpen(false)
        } 
        if (option === 'datedesc') { // most recent first
            setWatchList(w.sort((a, b)=> new Date(a.releaseDate) - new Date(b.releaseDate)))
            setFilterModalOpen(false)
        }
        genreList.forEach(item => {
            item = item.toLowerCase()
            if (option === item) {
                setWatchList(w.filter(z => z.genre.toLowerCase().includes(item)))
                setFilterModalOpen(false)
            }
        })
    }

    const toggleModal = () => {
        filterModalOpen ? setFilterModalOpen(s => false) 
        : setFilterModalOpen(s => true)
    }

        return(
            <div className='watch-list-container' style={{width: '100%', height: '100%', overflowY: 'auto'}}>
                <Modal isOpen={filterModalOpen} className='watch-list-modal' overlayClassName='watch-list-modal-overlay'>
                        <div style={{display: 'flex', justifyContent: 'space-between', background: '#313131', height: 50, alignItems: 'center' }}>
                            <span style={{padding: 5, color: '#cff', fontSize: 24}}>Select Filter</span>
                            <button className='close-filter-btn' onClick={toggleModal}>X</button>
                        </div>
                        <button onClick={() => filterResults('dateDesc')} >Newest First</button>
                        <button onClick={() => filterResults('dateAsc')} >Oldest First</button>
                        <button onClick={() => filterResults('horror')} >Horror</button>
                        <GenreFilterBtns filterResults={filterResults}/>
                </Modal>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <h1 style={{color: '#fff'}}>{view === 'watchList' ? 'Watch List' : null}</h1>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <button className='change-view-btn' onClick={changeDisplay}>{view === 'watchList' ? 'View Watched' : null}</button>
                        <button className='filter-btn' onClick={toggleModal}>
                            <img src={filterIcon} width={45} style={{marginTop: 2}} alt='filter results'/>
                        </button>
                    </div>
                </div>
                <div className='wli-container'>
                    { watchList ? watchList.slice(0).reverse().map( (wli, i) => {
                        return(
                            <WatchEntryCard wli={wli} key={i} mpData={mpData} isLoading={isLoading} />
                        )
                    }) : <div style={{color: '#fff', fontSize: 50}}>No Results</div>}
                </div>
            </div>
        )
    }
    export default EntryContainer