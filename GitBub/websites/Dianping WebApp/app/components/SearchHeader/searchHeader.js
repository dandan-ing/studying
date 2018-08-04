import React from 'react'
import SearchInput from 'Components/SearchInput/searchInput'
import 'Components/SearchHeader/style.scss'
import {withRouter} from 'react-router-dom'

class SearchHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    enterHandle(value) {
        this.props.history.push("/search/all/" + value)
    }

    clickhandle() {
        window.history.back();
    }
    
    render() {
        return (
            <div className="search-input-block">
                <div className="float-left header-left">
                    <span onClick={this.clickhandle.bind(this)}>
                        <i className="ishow-icon-arrow-left"></i>
                    </span>
                </div>
                <div className="header-center">
                    <SearchInput value={this.props.keyWord} enterFn={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchHeader)