import React, {useState} from 'react'

const CreateCard = () => {

    const [formVals, setFormVals] = useState({name: '', genre: '', releaseDate: '', dateWatched: '', rating: '', notes: ''})

    const buildOptions = (rating, genre) => {
        const options = []
        for (let i = 0; i < 11; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options
    }
    return(
        <div>
            <div>Add New Entry</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 40, width: 400}}>
                <div style={{display:'flex', gap: 20, marginTop: 20}}>
                    <span>Name:</span>
                    <input type='text' placeholder='Search for Show or Movie' value={formVals.name}/>
                </div>
                <div style={{display:'flex', gap: 20, marginTop: 20}}>
                    <span>Genre:</span>
                    <select>
                        {buildOptions()}
                    </select>
                </div>
                <div style={{display:'flex', gap: 20, marginTop: 20}}>
                    <span>Release Date:</span>
                    <input type='date' value={formVals.name}/>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Date Watched:</span>
                    <input type='date' value={formVals.dateWatched}/>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Rating:</span>
                    <select>
                    {buildOptions()}
                    </select>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Notes:</span>
                    <textarea rows={5} cols={115} style={{width: 1200}} value={formVals.notes}/>
                </div>
            </div>
        </div>
    )
}

export default CreateCard