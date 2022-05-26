import React from 'react'

const CreateCard = () => {

    const buildOptions = () => {
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
                    <input type='text'placeholder='Name'/>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Date:</span>
                    <input type='date'placeholder=''/>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Rating:</span>
                    <select>
                    {buildOptions()}
                    </select>
                </div>
                <div style={{display:'flex', gap: 20}}>
                    <span>Notes:</span>
                    <textarea rows={5} cols={115} style={{width: 1200}}/>
                </div>
            </div>
        </div>
    )
}

export default CreateCard