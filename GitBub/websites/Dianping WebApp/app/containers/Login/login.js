import React from 'react'
import Header from 'Components/Header/header.js'
import LoginInput from 'Components/LoginInput/loginInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from 'Actions/userinfo'
import {withRouter} from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checking: true
        }
    }

    componentDidMount() {
        this.doChceck();
    }

    loginHandler(username) {
        const actions = this.props.userinfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);

        //跳转页面
        const params = this.props.match.params;
        const redirectlink = params.redirectlink;
        if (redirectlink) {
            this.props.history.push(redirectlink);
        } else {
            this.goUserPage();
        }
    }

    doChceck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            //已登录
            this.goUserPage();
        } else {
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        this.props.history.push("/user");
    }
    
    render() {
        return (
            <div>
            {
                !this.state.checking
                ? 
                <div className="login-block">
                    <Header title="登录"/>
                    <LoginInput loginHandler={this.loginHandler.bind(this)}/>
                </div>
                :
                <div>已登录</div>
            }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login))