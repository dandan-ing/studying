import React from 'react'
import 'Components/HomeHeader/style.scss'
import { Link, hashHistory, withRouter } from 'react-router-dom'
import SearchInput from 'Components/SearchInput/searchInput'

class HomeHeader extends React.Component{

    constructor(props,context) {
        console.log(props);
        super(props, context);
    }

    enterHandle(value) {
        this.props.history.push("/search/all/" + encodeURIComponent(value));
    }

    render() {
        return (
            <div className="clear-fix home-header">
                <div className="float-left header-left">
                    <Link to="/city">
                    { this.props.cityName }
                    <i className="ishow-icon-arrow-down"></i>
                    </Link>
                </div>
                <div className="float-right header-right">
                    <Link to="/login">
                        <i className="ishow-icon-menu"></i>
                    </Link>
                </div>
                <div className="header-center">
                    <SearchInput value={this.props.keyWord} enterFn={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default withRouter(HomeHeader)