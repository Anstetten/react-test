import React, { Component } from 'react'

export class CustomizeImage extends Component {
    state={
        url:"",
        size:0,
    }

    handleChange=(event)=>{
        let value=event.target.value;
        let key = event.target.name;

        this.setState({
            [key]:value,
        })
    }

    render() {
        //Creating styles applicable to the image separately [little easier than inline styling]
        let style = {
            width: this.state.size+"px",
            height: this.state.size+"px",
          };
        return (
            <div>
                <input type="text" name ="url" value={this.state.url} onChange={this.handleChange}/>
                <input type="range" name="size" min="0" max="200"value={this.state.size} onChange={this.handleChange}></input>
                <h4>{this.state.size} x {this.state.size} px</h4>
                <img src={this.state.url} style={style} />
            </div>
        )   
    }
}

export default CustomizeImage
