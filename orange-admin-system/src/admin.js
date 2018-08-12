import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
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
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}