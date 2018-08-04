import React from 'react'
import OrderListItem from 'Components/OrderList/OrderListItem/orderListItem'
import 'Components/OrderList/OrderListItem/style.scss'

export default class OrderListContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let data = this.props.data;
        return (
            <div className="orderlist-item-block">
            {
                data.length 
                ?
                data.map((item,index)=>{
                    return (
                        <OrderListItem key={index} orderinfo={item} submitCommitFn={this.props.submitCommitFn} />
                    )
                })
                :
                null
            }
            </div>
        )
    }
}