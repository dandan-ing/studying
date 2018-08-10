import React from 'react';
import './index.less'

export default class Footer extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="footer">
                版权所有：私人项目 可供学习
            </div>
        )
    }
}