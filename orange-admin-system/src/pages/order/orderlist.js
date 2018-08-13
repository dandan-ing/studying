import React from 'react';
import { Card, Table, Modal,message, Button, Form} from 'antd';
import { ajax ,getRequestData} from '../../axios/index.js';
import OrderFitlerForm from './orderFilterForm.js';

import '../../mock/order.js'

const FormItem = Form.Item;

export default class OrderList extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            selectedRowKeys: '',
            selectedItem: ''
        }
    }

    formList = [
        {
            type: 'select',
            label: '城市',
            field: '',
            placeholder: '全部',
            initialValue: '1',
            width: 200,
            list:[{id:1,name:'上海'},{id:2,name:'上海2'},{id:3,name:'上海3'}]
        },
        {
            type: 'timeRange',
            label: '订单时间',
            field: '',
            placeholder: '全部',
            initialValue: '1',
            width: 200,
            list:[{id:1,name:'上海'},{id:2,name:'上海2'},{id:3,name:'上海3'}]
        },
        {
            type: 'timeRange',
            label: '订单状态',
            field: '',
            placeholder: '全部',
            initialValue: '1',
            width: 200,
            list:[{id:1,name:'上海'},{id:2,name:'上海2'},{id:3,name:'上海3'}]
        }
    ]

    componentDidMount() {
        this.getRequestList();
    }

    getRequestList() {
        const data = getRequestData('/api/order/orderlist');
        data.then((res)=>{
            if (res.data.success){
                let dataList = res.data.data.list;
                dataList.map((item,index) => {
                    item.key = index;
                });
                this.setState({
                    dataSource: res.data.data.list
                })
            } else {
                Modal.info({
                    title:'提示',
                    content:'获取失败啦'
                })
            }
        })
    }

    getOrderDetail = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title:'提示',
                content:'请选择一条订单记录'
            })
            return;
        }
        //window.location.href = `/#/common/orderdetail/${item.id}`;
        window.open(`/#/common/order/detail/${item.orderId}`,'_blank');
    }

    onRowClick = (record, index) => {
        console.log(record);
        let sletKey = [index];
        this.setState({
            selectedRowKeys: sletKey,
            selectedItem: record
        })
    }

    render() {
        const columns = [
            {
               title:'订单编号',
               dataIndex:'orderId' 
            },
            {
                title:'用户名',
                dataIndex:'username' 
             },
             {
                title:'手机号',
                dataIndex:'phone' 
             },
             {
                title:'状态',
                dataIndex:'status' 
             },
             {
                title:'下单时间',
                dataIndex:'orderTime' 
             },
             {
                title:'订单金额',
                dataIndex:'amount' 
             },
             {
                title:'客服专员',
                dataIndex:'staf' 
             },
             {
                title:'实付金额',
                dataIndex:'money' 
             }
        ]
        const rowSelection = {
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys
        };
        return(
            <div>
                <Card>
                    <OrderFitlerForm/>
                </Card>
                <Card>
                    <Button style={{marginRight:'10px'}} type="primary" onClick={this.getOrderDetail}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            };
                        }}
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                    />
                </div>
            </div>
        )
    }
}


