import React from 'react';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <div className="pull-right">
                    Admin-Amdin by DD
                </div>
                <div className="clearfix"></div>
            </footer>
        )
    }
}