import React from 'react'
import { CITYNAME } from 'Config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from 'Actions/userinfo'
import Header from 'Components/Header/header'
import CurrentCity from 'Components/CurrentCity/currentCity'
import LocalStore from 'Helper/localStore'
import CityList from 'Components/CityList/cityList'
import {withRouter} from 'react-router-dom'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

class City extends React.Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
            cityList:[]
        }
    }

    componentDidMount(){
        const result = getRequestData('/api/cityList');
        result.then((response)=>{
            if (response.data) {
                const data = response.data.data;
                this.setState({
                    cityList: data
                })
            }
        })
    }

    changeCity(newCityName) {
        if (!newCityName) {
            return;
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCityName;
        this.props.userinfoActions.update(userinfo);
        //修改localstorage
        LocalStore.setItem(CITYNAME, newCityName);
        //调回首页
        this.props.history.push("/")
    }

    render() {
        let cityList = this.state.cityList;
        //console.log(cityList);
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList cityList={this.state.cityList} changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(City))