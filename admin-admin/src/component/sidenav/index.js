import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class SideNav extends React.Component{
    render(){
        return(
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{border: '0'}}>
                        <Link to="/" className="site_title">
                            <i className="fa fa-paw"></i> 
                            <span>Admin-Admin</span>
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                    <div className="main_menu_side hidden-print main_menu">
                        <div className="menu_section">
                            <ul className="nav side-menu">
                                <li>
                                    <NavLink to="/">
                                        <i className="fa fa-laptop"></i> 
                                        <span>首页</span>
                                    </NavLink>
                                </li>
                                <li className="active">
                                    <NavLink to="/product" activeClassName="active">
                                        <i className="fa fa-home"></i> 商品 
                                        <span className="fa fa-chevron-down"></span>
                                    </NavLink>
                                    <ul className="nav child_menu" style={{display: 'block'}}>
                                        <li className="current-page">
                                            <Link to="/"><span>商品管理</span></Link>
                                        </li>
                                    </ul>
                                    <ul className="nav child_menu">
                                        <li>
                                            <Link to="/"><span>品类管理</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/order" activeClassName="active">
                                        <i className="fa fa-home"></i> 订单管理 
                                        <span className="fa fa-chevron-down"></span>
                                    </NavLink>
                                    <ul className="nav child_menu">
                                        <li>
                                            <Link to="/"><span>订单管理</span></Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/user" activeClassName="active">
                                        <i className="fa fa-home"></i> 用户 
                                        <span className="fa fa-chevron-down"></span>
                                    </NavLink>
                                    <ul className="nav child_menu">
                                        <li>
                                            <Link to="/"><span>用户管理</span></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}