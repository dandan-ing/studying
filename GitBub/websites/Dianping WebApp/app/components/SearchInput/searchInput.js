import React from 'react'
import {Link} from 'react-router-dom'

export default class SearchInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    keyUphandle(e) {
        if (e.keyCode != 13) {
            return '';
        }
        this.props.enterFn(this.state.value);
    }
    
    render() {
        return (
            <input 
                type="text" 
                placeholder="请输入"
                value={this.state.value}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUphandle.bind(this)}
                />
        )
    }
}