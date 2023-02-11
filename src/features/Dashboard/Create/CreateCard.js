import React from 'react'
import moment from 'moment'

const CreateCard = ({setRating, watchDate, setWatchDate, notes, setNotes}) => {

    const generateOptions = () => {
        const options = []
        for (let i = 0; i < 11; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    return(
        <div className='center' id='create-card-container' >
            <div id='create-card-top-row'>
                <div className='center'>
                    <span style={{color: '#ddd', fontSize: 14, flex: 1}}>Watch Date: </span>
                    <input style={{borderRadius: 5, height: 50, flex: 2}} type='date' value={watchDate || moment().format('MM.dd.yyyy')} onChange={e => setWatchDate(e.target.value)}/>
                </div>
                <div className='center'>
                    <span style={{color: '#ddd', fontSize: 14, flex: 1}}>Rating: </span>
                    <select style={{height: 50, borderRadius: 5, flex: 2 }} onChange={(e) => setRating(e.target.value)}>
                    {generateOptions()}
                    </select>
                </div>
            </div>
            <div id='create-card-bottom-row'>
                <textarea rows={6} cols={20} value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </div>
            
        </div>
    )
}

export default CreateCard