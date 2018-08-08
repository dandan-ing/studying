import React from 'react';
import PageTitle from 'component/pagetitle';
import './index.css'

export default class Home extends React.Component{
    render(){
        return(
            <div className="right_col" style={{minHeight:'618px'}}>
                <PageTitle title="首页"></PageTitle>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col-md-12">
                        Home
                    </div>
                </div>
            </div>
        )
    }
}