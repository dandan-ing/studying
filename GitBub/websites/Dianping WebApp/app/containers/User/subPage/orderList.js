import React from 'react'
import OrderListContainer from 'Components/OrderList/orderList'
import LoadMore from 'Components/LoadMore/loadMore'
import 'Containers/User/subPage/style.scss'

import 'Mock/homeList'
import {getRequestData, postRequestData} from 'Helper/http';

export default class OrderList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const result = getRequestData('/api/orderlist');
        result.then((response)=>{
            if (response.data) {
                const data = response.data.data;
                this.setState({
                    data: data
                })
            }
        })
    }

    submitCommitHandle(id, value, callback) {
        let param = {id, value};
        const result = postRequestData('/api/postcomment',param);
        result.then(response=>{
            if (response.data){
                callback();
            }
        })
    }
    
    render() {
        const username = this.props.username;
        const data = this.state.data;
        return (
            <div className="orderlist-block">
                <div className="list-title">您的订单</div>
                <div className="list-content">
                    {
                        data.length
                        ? <OrderListContainer data={data} submitCommitFn={this.submitCommitHandle.bind(this)}/>
                        : <div>暂无订单哦</div>
                    }
                </div>
            </div>
        )
    }
}