import React from 'react'
import BuyAndStore from 'Components/BuyAndStore/buyAndStore'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as storeActionsFromOtherFile from 'Actions/store'
import {withRouter} from "react-router-dom";

class Buy extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            isStore:false
        }
    }

    componentDidMount() {
        //console.log(this.props.storeActions);

    }

    //检查是否已收藏
    checkStoreState() {
        const shopId = this.props.id;
        const store = this.props.store;

        //some 遍历数组，只要有一个满足即跳出遍历
        store.some(item => {
            if (item.id == shopId) {
                this.setState({
                    isStore: true
                })
            }
        })
    }

    //购买事件
    buyHandle() {
        const loginFlag = this.checkLogin();
        if (!loginFlag) {
            return;
        }
        console.log("点击buy");
        //购买

        //跳转到用户页面
        this.props.history.push("/user");
    }

    // 收藏事件
    storeHandle() {
        const shopId = this.props.id;
        const storeActions = this.props.storeActions;
        if (this.state.isStore) { 
            //已被收藏，点击时为取消收藏
            storeActions.rm({
                id: shopId
            });
            return;
        } else {
            //执行收藏动作，点击时为收藏
            storeActions.add({
                id: shopId
            });
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }

    //验证登录
    checkLogin() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            return true;
        } else {
            this.props.history.push(`/login/detail/${id}`);
        }
    }
    
    render() {
        return (
            <div>
                <BuyAndStore 
                isStore={this.state.isStore} 
                buyHandle={this.buyHandle.bind(this)}
                storeHandle={this.storeHandle.bind(this)}
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Buy))