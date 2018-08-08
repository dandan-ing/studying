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
                        <div className="animated flipInY col-md-4">
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-caret-square-o-right"></i></div>
                                <div className="count">179</div>
                                <h3>New Sign ups</h3>
                                <p>Lorem ipsum psdea itgum rixt.</p>
                            </div>
                        </div>
                        <div className="animated flipInY col-md-4">
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-comments-o"></i></div>
                                <div className="count">179</div>
                                <h3>New Sign ups</h3>
                                <p>Lorem ipsum psdea itgum rixt.</p>
                            </div>
                        </div>
                        <div className="animated flipInY col-md-4">
                            <div className="tile-stats">
                                <div className="icon"><i className="fa fa-sort-amount-desc"></i></div>
                                <div className="count">179</div>
                                <h3>New Sign ups</h3>
                                <p>Lorem ipsum psdea itgum rixt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}