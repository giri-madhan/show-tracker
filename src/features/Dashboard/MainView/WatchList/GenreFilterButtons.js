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

    const filterResults = (option, e) => {
        option = option.toLowerCase()
        let w = [...watchListItems]
        if (option === 'dateasc') {
            props.setFilterList(w.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)), option)
            props.setFilterModalOpen(e)
        } 
        if (option === 'datedesc') { // most recent first
            props.setFilterList(w.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)), option)
            props.setFilterModalOpen(e)
        }
        if (option === 'imdb') {
            props.setFilterList(w.sort((a, b) => a.voteAverage - b.voteAverage), 'Top Rated')
            props.setFilterModalOpen(e)
        }
        getGenres().forEach(item => {
            item = item.toLowerCase()
            if (option === item) {
                props.setFilterList(w.filter(z => z.genre.toLowerCase().includes(item)), option)
                props.setFilterModalOpen(e)
            }
        })
    }

    return (
        <div className='filter-modal-btns-container'>
            <button className='filter-modal-btn' onClick={(e) => filterResults('datedesc', e)}>Newest</button>
            <button className='filter-modal-btn' onClick={(e) => filterResults('dateasc', e)}>Oldest</button>
            <button className='filter-modal-btn' onClick={(e) => filterResults('imdb', e)}>Top Rated</button>
            {getGenres().map((g, idx) => {
                return <button className='filter-modal-btn' onClick={(e) => {
                    filterResults(g.toLowerCase(), e)
                }} key={idx}>{g}</button>
            })}
        </div>
    )
}

export default GenreFilterBtns