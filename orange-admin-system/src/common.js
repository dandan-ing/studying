import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import { Row,Col } from 'antd';
import './style/common.less';

export default class Common extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Row className="simple-page">
                    <Header menuType="second"/>
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        )
    }
}