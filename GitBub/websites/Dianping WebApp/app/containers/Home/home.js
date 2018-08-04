import React from 'react'
import HomeHeader from 'Components/HomeHeader/homeHeader'
import Category from 'Components/Category/category'
import AdList from 'Containers/Home/subPage/ad'
import List from 'Containers/Home/subPage/list'
import { connect } from 'react-redux'

class Home extends React.Component{
    constructor(props, context) {
        super(props, context)
    }
    
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} click/>
                <Category />
                <AdList />
                <List/>
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
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)