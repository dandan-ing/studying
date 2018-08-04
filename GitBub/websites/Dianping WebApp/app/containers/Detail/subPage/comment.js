import React from 'react'
import CommnentList from 'Components/CommentList/commentList'
import LoadMore from 'Components/LoadMore/loadMore'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

export default class Comment extends React.Component{
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
        let shopId = this.props.id;
        this.loadFirestPageData(shopId);
    }

    //获取首屏数据
    loadFirestPageData(shopId) {
        
        const cityName = this.props.cityName;
        this.getListData(cityName, 0, shopId);
    }

    //获取数据
    getListData(cityName, page) {
        const result = getRequestData('/api/commentList');
        result.then((response)=>{
            if (response.data) {
                const hasMore = response.data.hasMore;
                const data = response.data.data;
                //console.log(data);
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
            <div className="comment-block">
                <div className="title">用户点评</div>
                <div>
                {
                    this.state.data.length
                    ? 
                    <CommnentList commentList={this.state.data} />
                    : 
                    <div>加载中...</div>
                }
                </div>
                {
                    this.state.hasMore 
                    ? 
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    :
                    <div>

                    </div>
                }
            </div>
        )
    }
}