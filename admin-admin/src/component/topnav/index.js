import React from 'react';
import { Link } from 'react-router-dom';

export default class Topdiv extends React.Component{

    clickLogoutHandle() {
        console.log("退出");
    }

    render(){
        return(
            <div className="top_nav">
                <div className="nav_menu">
                    <div className="nav toggle">
                        <span>
                            <i className="fa fa-bars"></i>
                        </span>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/" className="user-profile dropdown-toggle">
                                <i className="fa fa-user"></i> 欢迎，Admin 
                                <span className="fa fa-angle-down"></span>
                            </Link>
                            <ul className="dropdown-menu dropdown-usermenu pull-right">
                                <li>
                                    <span onClick={()=>this.clickLogoutHandle()}>
                                        <i className="fa fa-sign-out pull-right"></i> 退出登录
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}