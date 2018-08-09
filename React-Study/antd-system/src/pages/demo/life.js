import React from 'react';
import Child from './child'

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    clickHandle(){
        console.log("点击了一下");
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h3>生命周期</h3>
                <button onClick={this.clickHandle.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
                <Child name="Tom"/>
            </div>
        )
    }
}
