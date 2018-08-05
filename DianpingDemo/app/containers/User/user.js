import React from 'react'
import Header from 'Components/Header/header'
import UserInfo from 'Components/UserInfo/userInfo'
import OrderList from 'Containers/User/subPage/orderList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from 'Actions/userinfo'
import {withRouter} from 'react-router-dom'

class User extends React.Component{

    componentDidMount(){
        if (!this.props.userinfo.username) {
            //未登录
            this.props.history.push("/login");
        }
    }

    render() {
        const userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户中心" backRoute="/" />
                <UserInfo userinfo={userinfo} />
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(User))