import React from 'react';
import { Card, Button, Form, Input, message,Icon,Checkbox,Radio,Select,DatePicker,Switch,InputNumber, TimePicker, Upload} from 'antd';
import '../admincommon.less';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
const TextAreaRowConfig = {
    minRows: 4,
    maxRows: 6
}

class RegisterForm extends React.Component{
    constructor(props) {
        super(props)
    }

    handleUploadImg = (info) => {
         
    }

    submitReg = () => {
        let userinfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userinfo));
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('username', {
                                initialValue: '',
                                rules:[
                                    {
                                        required: true,
                                        message:'用户名不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入用户名"/>)
                        }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator('password', {
                                initialValue: '',
                                rules:[
                                    {
                                        required: true,
                                        message:'密码不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入密码"/>)
                        }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                        {
                            getFieldDecorator('sex', {
                                initialValue: ''
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>
                            )
                        }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator('age', {
                                initialValue: 18
                            })(
                                <InputNumber/>
                            )
                        }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                        {
                            getFieldDecorator('state', {
                                initialValue: '2'
                            })(
                                <Select>
                                    <Option value="1">无业游民</Option>
                                    <Option value="2">自由创业者</Option>
                                    <Option value="3">CEO</Option>
                                    <Option value="4">其他</Option>
                                </Select>
                            )
                        }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                        {
                            getFieldDecorator('hobby', {
                                initialValue: ['2','3']
                            })(
                                <Select mode="multiple">
                                    <Option value="1">看书</Option>
                                    <Option value="2">看电视</Option>
                                    <Option value="3">玩手机</Option>
                                    <Option value="4">健身</Option>
                                </Select>
                            )
                        }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                        {
                            getFieldDecorator('isMarried', {
                                valuePropName:'checked',
                                initialValue: true
                            })(
                                <Switch/>
                            )
                        }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                        {
                            getFieldDecorator('birth', {
                                initialValue: moment('2018-08-08 12:00:09')
                            })(
                                <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                />
                            )
                        }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                        {
                            getFieldDecorator('contactAdd', {
                                initialValue: ''
                            })(
                                <TextArea autosize={TextAreaRowConfig} />
                            )
                        }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                        {
                            getFieldDecorator('time')(
                                <TimePicker />
                            )
                        }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                        {
                            getFieldDecorator('uerImg')(
                                <Upload
                                listType="picture-card"
                                showUploadList={false}
                                onChange={this.handleUploadImg}
                                action=""
                                >
                                
                                </Upload>
                            )
                        }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                        {
                            getFieldDecorator('bool')(
                                <Checkbox>同意以上协议<a href="#">协议</a></Checkbox>
                            )
                        }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.submitReg}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(RegisterForm);