import React from 'react';
import { Card, Table, Modal,message, Button} from 'antd';
import '../admincommon.less';
import { ajax ,getRequestData} from '../../../axios';
import Util from '../../../utils/utils';

import '../../../mock/table'

export default class Paginations extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            dataSource2:[],
            pagination:[]
        }
    }

    componentDidMount() {
        this.queryTable2Data();
    }

    queryTable2Data = (params) => {
        if (!params) {
            params = {
                page: 1
            }
        }
        const data = getRequestData('/api/admin/data/table');
        data.then((res)=>{
            if (res.data.success){
                //console.log(res.data.data.list);
                const dataSource2 = res.data.data.list;
                dataSource2.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource2,
                    pagination:Util.pagination(res, (current)=>{
                        this.queryTable2Data({
                            page: current + 1
                        });
                    })
                })
            }
        })
    }

    render(){
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

        return(
            <div>
                <Card title="表格分页" className="card-container">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}