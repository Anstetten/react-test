import React, { Component } from 'react'
import './TemperatureComp.css';

export class TemperatureComp extends Component {

    state={
        temperature:"",
    }

    //Function to handle all the value changes in the input tags
    handleChange=(event)=>{
        this.setState({temperature:event.target.value})
    }

    render() {
        
        return (
            <div className="tempCompDiv">
                <input onChange={this.handleChange} value={this.state.temperature} type="number" name="number" placeholder="Temmperature in *C"/>
                {this.state.temperature<=10 ? <h3 className="cold">It's cold ❄️</h3>:
                    this.state.temperature>=30 ? <h3 className="warm">It's warm ☀️</h3>:
                    <h3 className="nice">It's nice 🌼</h3>}
            </div>

        )
    }
}

export default TemperatureComp
