import React, { Component } from 'react'
import TemperatureComp from '../../Components/TemperatureComp/TemperatureComp'

export class Temperature extends Component {
    render() {
        return (
            <div>
                <h1>Temperature</h1>
                <TemperatureComp/>
            </div>
        )
    }
}

export default Temperature
