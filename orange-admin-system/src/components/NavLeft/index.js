import React from 'react';
import MenuList from '../../config/menuConfig';
import {Menu,Icon} from 'antd';
import './index.less';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
export default class Navleft extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menuTreeNode: []
        }
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuList);
        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    //渲染菜单
    renderMenu = (data) => {
        return data.map((item, index)=>{
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    </NavLink>
                </Menu.Item>
            )
            
        })
    }


    render(){
        return(
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo.png"/>
                    <h1>Orange Admin</h1>
                </div>
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}