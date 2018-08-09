import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        console.log("willMount")
    }

    componentDidMount(){
        console.log("didMount")
    }

    componentWillReceiveProps(newProps){
        console.log("WillReceiveProps:"+newProps.name)
    }

    shouldComponentUpdate(){
        console.log("should Update")
        return true;
    }

    componentWillUpdate(){
        console.log("WillUpdate")
    }

    componentDidUpdate(){
        console.log("DidUpdate")
    }

    render() {
        return(
            <div>
                <h3>子组件，测试其生命周期</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
