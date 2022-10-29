import { genreList } from '../../../../utils/getGenre'

const GenreFilterBtns = (props) => {


    return (
        <>
            {genreList.map((g, idx) => {
                return <button onClick={() => {
                    props.filterResults(g.toLowerCase())
                }} key={idx}>{g}</button>
            })}
        </>
    )
}

export default GenreFilterBtns