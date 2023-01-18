import { VictoryPie, VictoryTheme } from 'victory'
import { genreList } from '../../../../../utils/getGenre'

const GenrePieChart = (props) => {
    const {mpData} = props

    const createChartData = () => {

        const genreData = []
        mpData.forEach( x => {
            if (x.genre.includes(',')) {
                x.genre.split(',').map( item => genreData.push(item.trim()))
            } else {
                genreList.push(x.genre)
            }
        })
        const genreCount = genreData.reduce((allGenres, genre) => {
            const currCount = allGenres[genre] ?? 0;
            return {
              ...allGenres,
              [genre]: currCount + 1,
            };
          }, {})
          
          let genreChartData = []
          for (const genre in genreCount) {
            genreChartData.push({
                y: genreCount[genre],
                label: genre + ` (${genreCount[genre]})`
            })
          }
          return genreChartData
    }
    

    return (
        <VictoryPie 
            name='fav-genres'
            data={createChartData()}
            labelPosition={'centroid'}
            labelPlacement={'parallel'}
            style={{ labels: { fill: '#fff', fontSize: 14, fontWeight: 'bold' }}}
            theme={VictoryTheme.material}
            padding={{ top: 100, bottom: 100, left: 100, right: 100 }}
            width={1000}
            height={500}
            padAngle={5}
            innerRadius={50}
        />
    )
}
export default GenrePieChart