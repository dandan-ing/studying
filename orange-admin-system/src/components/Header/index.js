import React from 'react';
import {Row,Col} from 'antd';
import './index.less';
import Util from '../../utils/utils';
// import axios from '../../Axios';

export default class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: 'Jack',
            sysTime:'',
            weather:''
        }
    }

    getSysTime(){
        setInterval(()=>{
            this.setState({
                sysTime: Util.formateDate(new Date().getTime())
            })
        },1000);
    }

    componentDidMount(){
        this.getSysTime();
        this.getWeatherApiData();
    }

    componentWillUnmount(){
        clearInterval();
    }

    getWeatherApiData(){
        // let city="北京";
        // let url = "http://api.baidu.com/"  + encodeURIComponent(city);
        // // axios.jsonp({
        //     url: url,
        // }).then((res)=>{
            
        // }).catch({
            
        // })

        this.setState({
            weather: "大晴天"
        })
    }

    render(){
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.username}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                    首页
                    </Col>
                    <Col span="20" className="breadcrumb-weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}