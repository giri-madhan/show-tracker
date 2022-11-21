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
        <div className='c' style={{gap: 5, width: '100%', padding: 20}}>
            <div style={{display: 'flex', flexDirection: 'column', flex: 1, gap: 10, height: '100%'}}>
                <div className='c' style={{height: 50}}>
                    <span style={{color: '#ddd', fontSize: 14, flex: 1}}>Watch Date: </span>
                    <input style={{borderRadius: 15, height: 50, flex: 2}} type='date' value={watchDate || moment().format('MM.dd.yyyy')} onChange={e => setWatchDate(e.target.value)}/>
                </div>
                
                <div className='c'>
                    <span style={{color: '#ddd', fontSize: 14, flex: 1}}>Rating: </span>
                    <select style={{height: 50, borderRadius: 15, flex: 2 }} onChange={(e) => setRating(e.target.value)}>
                    {generateOptions()}
                </select>
                </div>
            </div>
            <textarea style={{flex: 2, borderRadius: 15, padding: 15}}rows={6} cols={20} value={notes} onChange={(e) => setNotes(e.target.value)}/>
        </div>
    )
}

export default CreateCard