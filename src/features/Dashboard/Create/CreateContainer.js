import React from 'react'
import CreateCard from './CreateCard'

export default class CreateContainer extends React.Component {
    render(){
        return(
            <div style={{width: '80%', height: '100%', border: '1px solid black'}}>
                <CreateCard />
            </div>
        )
    }
}