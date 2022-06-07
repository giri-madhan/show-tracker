import React from 'react'

export default class DashHeaderItem extends React.Component {
    render(){
        return(
            <div>
                <button className='dhi' onClick={() => this.props.setDashView(this.props.item)}>{this.props.item.toUpperCase()}</button>
            </div>
        )
    }
}