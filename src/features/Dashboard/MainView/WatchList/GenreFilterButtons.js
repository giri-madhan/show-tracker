import { genreList } from '../../../../utils/getGenre'

const GenreFilterBtns = (props) => {

    const filterResults = (option) => {
        option = option.toLowerCase()
        let w = [...props.watchListItems]
        if (option === 'dateasc') {
            props.setWatchList(w.sort((a, b)=> new Date(b.releaseDate) - new Date(a.releaseDate)))
            props.setFilterModalOpen(false)
        } 
        if (option === 'datedesc') { // most recent first
            props.setWatchList(w.sort((a, b)=> new Date(a.releaseDate) - new Date(b.releaseDate)))
            props.setFilterModalOpen(false)
        }
        genreList.forEach(item => {
            item = item.toLowerCase()
            if (option === item) {
                props.setWatchList(w.filter(z => z.genre.toLowerCase().includes(item)))
                props.setFilterModalOpen(false)
            }
        })
    }

    return (
        <div className='filter-modal-btns-container'>
            <button className='filter-modal-btn' onClick={() => filterResults('datedesc')}>Most Recent First</button>
            <button className='filter-modal-btn' onClick={() => filterResults('dateasc')}>Oldest First</button>
            {genreList.map((g, idx) => {
                return <button className='filter-modal-btn' onClick={() => {
                    filterResults(g.toLowerCase())
                }} key={idx}>{g}</button>
            })}
        </div>
    )
}

export default GenreFilterBtns