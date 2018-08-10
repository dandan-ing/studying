import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import { Row,Col } from 'antd';
import './style/common.less';

export default class Admin extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Row className="container">
                <Col className="nav-left">
                    <NavLeft/>
                </Col>
                <Col className="main">
                    <Header/>
                    <Row className="content">
                        <Home/>
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}