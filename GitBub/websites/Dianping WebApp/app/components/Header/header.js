import React from 'react'
import 'Components/Header/style.scss'
import {withRouter} from 'react-router-dom'

class Header extends React.Component{
    constructor(props, context) {
        super(props, context)
    }

    clickHandle() {
        const backRoute = this.props.backRoute;
        if (backRoute) {
            this.props.history.push(backRoute);
        } else {
            this.props.history.goBack();
        }
    }
    
    render() {
        return (
            <div className="header">
                <span onClick={this.clickHandle.bind(this)}>
                    <i className="ishow-icon-arrow-left"></i>
                </span>
                <span className="title">{this.props.title}</span>
            </div>
        )
    }
}

export default withRouter(Header)