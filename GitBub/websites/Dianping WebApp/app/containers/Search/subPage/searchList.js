import React from 'react'
import ListItem from 'Components/List/ListItem'
import LoadMore from 'Components/LoadMore/loadMore'
import { connect } from 'react-redux'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

class SearchList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: false,
            isloadingMore: false, //记录当前状态 加载中.../不在加载中
            page: 0, //下一页
        }
    }

    componentDidMount() {
        this.loadFirestPageData();
    }

    componentDidUpdate(prevProps, prevState) {
        const keyWord = this.props.keyWord;
        const type = this.props.type;
        if (keyWord === prevProps.keyWord && type === prevProps.type) {
            return;
        }

        this.state = {
            data: [],
            hasMore: false,
            isloadingMore: false, //记录当前状态 加载中.../不在加载中
            page: 0, //下一页
        }

        this.loadFirestPageData();
    }

    //获取首屏数据
    loadFirestPageData() {
        const cityName = this.props.cityName;
        const keyWord = this.props.keyWord;
        const type = this.props.type;
        this.getListData(cityName, 0, type, keyWord);
    }

    //获取数据
    getListData(cityName, page) {
        const result = getRequestData('/api/homelist');
        result.then((response)=>{
            if (response.data) {
                const hasMore = response.data.hasMore;
                const data = response.data.data;
                this.setState({
                    hasMore: hasMore,
                    data: this.state.data.concat(data)
                })
            }
        })
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.props.page;
        this.getListData(cityName, page);
        
        //增加page
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
        
    }
    
    render() {
        return (
            <div className="list-block">
                <div className="list-content">
                    {
                        this.state.data.length
                        ? <ListItem listData={this.state.data}/>
                        : <div>加载中...</div>
                    }
                </div>
                {
                    this.state.hasMore 
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :
                    <div></div>
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
       
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)