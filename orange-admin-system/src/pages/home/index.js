import React from 'react';
import './index.less';

export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="home-wrap">
                欢迎来到Orange Admin！
            </div>
        )
    }
}