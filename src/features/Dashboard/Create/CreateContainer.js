import React from 'react'
import CreateCard from './CreateCard'

export default class CreateContainer extends React.Component {
    render(){
        return(
            <div style={{width: '80%', height: '100%', border: '1px solid black'}}>
                <div style={{display: 'flex', gap: 40}}>
                <div style={{display: 'flex',}}>
                    <button>List View</button>
                    <button>Card View</button>
                </div>
                <h1>Watch List</h1>
                </div>
                <CreateCard />
            </div>
        )
    }
}