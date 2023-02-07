import {useState} from 'react'
import UserMenu from './UserMenu'
import filterIcon from '../../../icons/filter.png'
import DashFilterModal from './DashFilterModal'

const DashHeader = (props) => {
    const {
        viewDisplay = 'watchList',
        setViewDisplay,
        watchListItems,
        filteredList,
        setFilterList,
        filter
    } = props

    const [filterModalOpen, setFilterModalOpen] = useState(false)

    const getDisplayName = () => {
        switch(viewDisplay) {
            case 'watchList':
                return 'Watch List'
            case 'watched':
                return 'Watched List'
            case 'stats':
                return 'Watched Statistics'       
            default:
                return ''
        }
    }

    return(
        <div className='dash-header'>
            <h1 id='header-title' style={{color: '#fff'}}>{getDisplayName()}</h1>
                <div id='dash-header-container' style={{display: 'flex', marginLeft: 'auto', alignItems: 'center', gap: 20}}>
                    {viewDisplay === 'watchList' && 
                    <>
                        <DashFilterModal 
                            isOpen={filterModalOpen} 
                            toggle={setFilterModalOpen} 
                            watchListItems={watchListItems}
                            filteredList={filteredList}
                            setFilterList={setFilterList}
                        />
                        {(filter &&  filteredList.length > 0) && (
                        <span id='filter-choice-text' className='center' onClick={() => setFilterList([])}>
                            {filter} {'(' + filteredList.length + ')'}
                        <button className='clear-filter'>X</button>
                        </span>
                        )}
                        <button className='filter-btn' onClick={setFilterModalOpen}>
                            <img src={filterIcon} width={45} style={{marginTop: 2}} alt='filter results'/>
                        </button>
                    </>    
                    }
                    {viewDisplay !== 'watchList' && <button className='change-view-btn' onClick={() => setViewDisplay('watchList')}>
                        Watch List
                    </button>}
                    {viewDisplay !== 'watched' && <button className='change-view-btn' onClick={() => setViewDisplay('watched')}>
                        Watched
                    </button>}
                    {viewDisplay !== 'stats' && <button className='change-view-btn' onClick={() => setViewDisplay('stats')}>
                        Statistics
                    </button>}
                    <div className='center'>
                        <UserMenu />
                    </div>
                </div>
        </div>
    )
}

export default DashHeader