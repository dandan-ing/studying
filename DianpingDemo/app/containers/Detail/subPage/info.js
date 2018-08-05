import React from 'react'
import 'Containers/Detail/style.scss'
import DetailInfo from 'Components/DetailInfo/detailInfo'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

export default class Info extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            info: false
        }
    }
    
    componentDidMount() {
        let id = this.props.id;
        this.loadFirstPageData(id, 0);
    }

    loadFirstPageData(id, page) {
        this.getShopDetail(id, page);
    }

    //获取数据
    getShopDetail(id, page) {
        const result = getRequestData('/api/detail');
        result.then((response)=>{
            if (response.data) {
                const data = response.data.data;
                this.setState({
                    info: data
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
            <div>
                <DetailInfo info={this.state.info}/>
            </div>
        )
    }
}