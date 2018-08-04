import React from 'react'
import SearchHeader from 'Components/SearchHeader/searchHeader'
import SearchList from 'Containers/Search/subPage/searchList'

export default class Search extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader keyWord={params.keyword} />
                <SearchList keyWord={params.keyword} type={params.type}/>
            </div>
        )
    }
}