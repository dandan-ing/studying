import React from 'react';
import { Card, Table, Modal,message, Button, Badge} from 'antd';
import '../admincommon.less';
import { ajax ,getRequestData} from '../../../axios/index.js';

import '../../../mock/table.js'

export default class Tables extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dataSource:[],
            dataSource2:[],
            selectedRowKeys: '',
            selectedItem: [],
            sortOrder:''
        }
    }

    componentDidMount() {
        const dataSource = [
            {
                id: "1",
                username: 'Tom',
                sex: '1',
                state: '1',
                hobby: '1',
                birth: '2000-01-01',
                contactAdd: 'dadsa',
                time: '09:00'
            },
            {
                id: '1',
                username: 'Tom',
                sex: '1',
                state: '2',
                hobby: '1',
                birth: '2000-01-01',
                contactAdd: 'dadsa',
                time: '09:00'
            },
            {
                id: '1',
                username: 'Tom',
                sex: '1',
                state: '3',
                hobby: '1',
                birth: '2000-01-01',
                contactAdd: 'dadsa',
                time: '09:00'
            }
        ]
        dataSource.map((item,index)=>{
            item.key = index
        })

        this.setState({
            dataSource
        })

        this.queryTable2Data();
    }

    queryTable2Data = () => {
        const data = getRequestData('/api/admin/data/table');
        data.then((res)=>{
            if (res.data.success){
                //console.log(res.data.data.list);
                const dataSource2 = res.data.data.list;
                dataSource2.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource2
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let sletKey = [index];
        Modal.info({
            title:'提示',
            content:`用户:${record.username}，性别：${record.sex}`
        })
        this.setState({
            selectedRowKeys: sletKey,
            selectedItem: record
        })
    }

    handleDel = () => {
        let rows = this.state.selectedRows;
        let ids = [];
        if (rows && rows.length > 0) {
            rows.map((item)=>{
                ids.push(item.id);
            });
            Modal.info({
                title:'提示',
                content:`您确定要删除吗?${ids.join(",")}`,
                onOk:()=>{
                    message.success("删除成功");
                }
            })
        } else {
            Modal.info({
                title:'提示',
                content:`请选择要删除的行`
            })
        }
    }

    handleSortChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }

    render(){
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'username',
                fixed:'left'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                fixed:'left',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config = {
                        '1':'无业游民',
                        '2':'自由创业者',
                        '3':'CEO',
                        '4':'其他'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby'
            },
            {
                title: '生日',
                dataIndex: 'birth'
            },
            {
                title: '地址',
                dataIndex: 'contactAdd',
                fixed:'right',
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                fixed:'right',
            }
        ];
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){

                    let config = {
                        '1':'无业游民',
                        '2':'自由创业者',
                        '3':'CEO',
                        '4':'其他'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby'
            },
            {
                title: '生日',
                dataIndex: 'birth'
            },
            {
                title: '地址',
                dataIndex: 'contactAdd'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ];
        const column3 = [
            {
                title: 'id',
                dataIndex: 'id',
                sorter:(a, b) => {
                    return a.id - b.id
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config = {
                        '1':'无业游民',
                        '2':'自由创业者',
                        '3':'CEO',
                        '4':'其他'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby'
            },
            {
                title: '生日',
                dataIndex: 'birth'
            },
            {
                title: '地址',
                dataIndex: 'contactAdd'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ];
        const column4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config = {
                        '1':<Badge status="success" text="无业游民"/>,
                        '2':<Badge status="info" text="自由创业者"/>,
                        '3':<Badge status="info" text="CEO"/>,
                        '4':'其他'
                    }
                    return config[state];
                }
                
            },
            {
                title: '爱好',
                dataIndex: 'hobby'
            },
            {
                title: '生日',
                dataIndex: 'birth'
            },
            {
                title: '地址',
                dataIndex: 'contactAdd'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
            {
                title:'操作',
                render(){
                    return <a href="#">删除</a>
                }
            }
        ]

        const rowSelection = {
            type:'radio',
            selectedRowKeys:this.state.selectedRowKeys
        };

        const rowCheckSelection  = {
            type:'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange:(selectedRowKeys, selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }

        return(
            <div>
                <Card title="基础表格" className="card-container">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="动态数据渲染表格" className="card-container">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>

                <Card title="表格嵌套单选按钮列" className="card-container">
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index);
                                }
                            }
                        }}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="表格嵌套复选框列" className="card-container">
                    <Button type="primary" onClick={this.handleDel}>删除</Button>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title="表格-头部固定" className="card-container">
                    <Table
                        bordered
                        scroll={{y:140}}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="表格-左侧固定" className="card-container">
                    <Table
                        bordered
                        scroll={{x:140}}
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>

                <Card title="表格-排序" className="card-container">
                    <Table
                        bordered
                        columns={column3}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onChange={this.handleSortChange}
                    />
                </Card>

                <Card title="表格-操作按钮" className="card-container">
                    <Table
                        bordered
                        columns={column4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

            </div>
        )
    }
}