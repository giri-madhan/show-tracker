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
        <>
            {genreList.map((g, idx) => {
                return <button onClick={() => {
                    filterResults(g.toLowerCase())
                }} key={idx}>{g}</button>
            })}
        </>
    )
}

export default GenreFilterBtns