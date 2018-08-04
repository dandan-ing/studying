import React from 'react'
import 'Components/CurrentCity/style.scss'

export default class CurrentCity extends React.Component{
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
}