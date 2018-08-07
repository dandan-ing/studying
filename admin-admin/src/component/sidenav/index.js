import React from 'react';

export default class SideNav extends React.Component{
    render(){
        return(
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: '0'}}>
                        <a href="index.html" className="site_title">
                            <i className="fa fa-paw"></i> 
                            <span>Admin-Admin</span>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section active">
                        <ul className="nav side-menu" >
                            <li className="active">
                                <a>
                                    <i className="fa fa-home"></i> Home 
                                    <span className="fa fa-chevron-down"></span>
                                </a>
                                <ul className="nav child_menu" style={{display: 'block'}}>
                                    <li className="current-page"><a href="index.html">Dashboard</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu_section">
                        <h3>Live On</h3>
                        <ul className="nav side-menu">
                            <li><a href="javascript:void(0)"><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                        </ul>
                    </div>

                    </div>
                    <div className="sidebar-footer hidden-small">
                    <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Settings">
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
                        <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
                        <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="" href="login.html" data-original-title="Logout">
                        <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
                    </div>
                </div>
                </div>
        )
    }
}