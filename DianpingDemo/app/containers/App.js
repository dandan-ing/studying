import React from 'react'
import LocalStore from 'Helper/localStore'
import { CITYNAME } from 'Config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from 'Actions/userinfo'

class App extends React.Component{

    constructor(props, context){
        super(props, context)
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        //从localStore获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        }
        //console.log(cityName);

        //将数据存储到redux
        this.props.userinfoActions.update({
            cityName: cityName
        })

        //loading
        this.setState({
            initDone: true
        });
    }

    render(){
        return (
            <div>
            {
                this.state.initDone
                ? 
                this.props.children
                :
                <div>加载中。。。</div>
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)