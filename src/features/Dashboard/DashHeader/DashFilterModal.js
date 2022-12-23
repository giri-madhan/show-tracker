import Modal from 'react-modal'
import GenreFilterBtns from '../MainView/WatchList/GenreFilterButtons'

const DashFilterModal = (props) => {
    const {isOpen, toggle, watchListItems, setFilteredList} = props

    return (
        <Modal isOpen={isOpen} className='watch-list-modal' overlayClassName='watch-list-modal-overlay' ariaHideApp={false}>
            <div style={{display: 'flex', background: '#313131', height: 50, alignItems: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 26, margin:'0 auto'}}>Select Filter</span>
                <button className='close-filter-btn' onClick={() => toggle(!isOpen)}>X</button>
            </div>
            <GenreFilterBtns 
                watchListItems={watchListItems} 
                setFilterModalOpen={toggle}
                setFilteredList={setFilteredList}
            />
        </Modal>
    )
}

export default DashFilterModal
