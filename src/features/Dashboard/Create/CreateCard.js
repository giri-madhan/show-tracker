import React, {useState} from 'react'
import moment from 'moment'

const CreateCard = ({item, setRating, watchDate, setWatchDate, notes, setNotes}) => {

    const generateOptions = () => {
        const options = []
        for (let i = 0; i < 11; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', gap: 20, marginTop: 20}}>
            <input type='date' value={watchDate || moment().format('yyyy-MM-dd')} onChange={e => setWatchDate(e.target.value)}/>
            <textarea rows={6} cols={75} value={notes} onChange={(e) => setNotes(e.target.value)}/>
            <select style={{width: 100, height: 50}} onChange={(e) => setRating(e.target.value)}>
                {generateOptions()}
            </select>
        </div>
    )
}

export default CreateCard