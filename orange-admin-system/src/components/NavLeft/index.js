import React from 'react';
import MenuList from './../../config/menuConfig';
import {Menu,Icon} from 'antd';
import './index.less';

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
                    <SubMenu key={item.key} title={item.title}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
        })
    }


    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo.jpg"/>
                    <h1>Orange Amdin</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}