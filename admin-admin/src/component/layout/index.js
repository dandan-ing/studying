import React from 'react';
import TopNav from 'component/topnav';
import SideNav from 'component/sidenav';
import Footer from 'component/footer';
import './theme.css';

export default class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container body">
                <div className="main_container">
                    <SideNav />
                    <TopNav />
                    { this.props.children }
                    <Footer />
                </div>
            </div>
        )
    }
}