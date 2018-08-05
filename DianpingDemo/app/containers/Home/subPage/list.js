import React from 'react'
import ListItem from 'Components/List/listItem'
import LoadMore from 'Components/LoadMore/loadMore'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

import 'Containers/Home/style.scss'

export default class List extends React.Component{
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

    //获取首屏数据
    loadFirestPageData() {
        //console.log("loadFirestPageData");
        const cityName = this.props.cityName;
        this.getListData(cityName, 0);
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
                <div className="list-title">猜你喜欢</div>
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