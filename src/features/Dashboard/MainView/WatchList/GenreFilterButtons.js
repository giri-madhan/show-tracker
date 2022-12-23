import { genreList } from '../../../../utils/getGenre'

const GenreFilterBtns = (props) => {
    const {watchListItems} = props

    const getGenres = () => {
        let currentGenres = []
        
        watchListItems.forEach( item => {
        
            if (item.genre.includes(',')) {
                item.genre.split(',').map(x => {
                    if (!currentGenres.includes(x.trim())) currentGenres.push(x.trim())
                })
            } else {
                if (!currentGenres.includes(item.genre)) currentGenres.push(item.genre)
            }
        })
        return currentGenres.sort()
    }

    const filterResults = (option) => {
        option = option.toLowerCase()
        let w = [...props.watchListItems]
        if (option === 'dateasc') {
            props.setFilterList(w.sort((a, b)=> new Date(b.releaseDate) - new Date(a.releaseDate)), option)
            props.setFilterModalOpen(false)
        } 
        if (option === 'datedesc') { // most recent first
            props.setFilterList(w.sort((a, b)=> new Date(a.releaseDate) - new Date(b.releaseDate)), option)
            props.setFilterModalOpen(false)
        }
        getGenres().forEach(item => {
            item = item.toLowerCase()
            if (option === item) {
                props.setFilterList(w.filter(z => z.genre.toLowerCase().includes(item)), option)
                props.setFilterModalOpen(false)
            }
        })
    }

    return (
        <div className='filter-modal-btns-container'>
            <button className='filter-modal-btn' onClick={() => filterResults('datedesc')}>Most Recent First</button>
            <button className='filter-modal-btn' onClick={() => filterResults('dateasc')}>Oldest First</button>
            {getGenres().map((g, idx) => {
                return <button className='filter-modal-btn' onClick={() => {
                    filterResults(g.toLowerCase())
                }} key={idx}>{g}</button>
            })}
        </div>
    )
}

export default GenreFilterBtns