import React from 'react';
import { Card, Table, Form, Modal,message, Button, Badge, Select, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class OrderFilterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    searchHandle = () => {
        let formValues = this.props.form.getFieldsValue();

    }

    resetHandle = () => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card>
                    <Form layout="inline">
                        <FormItem label="城市">
                            {
                                getFieldDecorator('city')(
                                    <Select placeholder="全部">
                                        <Option value="">全部</Option>
                                        <Option value="2500">上海</Option>
                                        <Option value="1602">南京</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="订单时间">
                            {
                                getFieldDecorator('startTime')(
                                    <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('endTime')(
                                    <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label="订单状态">
                            {
                                getFieldDecorator('status')(
                                    <Select placeholder="全部">
                                        <Option value="">全部</Option>
                                        <Option value="1">未付款</Option>
                                        <Option value="2">需求确认</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.searchHandle}>查询</Button>
                        </FormItem>
                        <FormItem>
                            <Button type="default" onClick={this.resetHandle}>重置</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(OrderFilterForm);


