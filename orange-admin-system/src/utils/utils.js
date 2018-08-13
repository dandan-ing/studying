import React from 'react';
import { Card, Table, Form, Modal,message, Button, Badge, Select, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

export default {

    //格式化时间"2018-08-09
    formateDate(time) {
        if (!time) {
            return '';
        }
        let date = new Date(time);
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-"+ date.getDay()
        + " " + date.getHours() + ":" +date.getMinutes()+":"+date.getSeconds();
    },
    pagination(data,callback){
        let page = {
            onChange:(current) => {
                callback(current);
            },
            current: data.current,
            pageSize: data.pageSize,
            total: data.total,
            showTotal: ()=>{
                return `共条数据`
            },
            showQuickJumper:true
        }

        return page;
    },

    getOptionData(data) {
        if (!data || !data.length) {
            return '';
        }
        let options = [<Option value="0" key="all_key">全部</Option>];
        data.map((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.nam}</Option>)
        })

        return options;
    }
}