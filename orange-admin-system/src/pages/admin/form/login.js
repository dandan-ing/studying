import React from 'react';
import { Card, Button, Form, Input, message,Icon,Checkbox} from 'antd';
import '../admincommon.less';

const FormItem = Form.Item;

class LoginForm extends React.Component{
    constructor(props) {
        super(props)
    }

    loginSubmitHandle = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values)=>{
            if (!err) {
                message.success(`校验通过${userInfo.username}`);
            }
        })
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    initialValue: 'Tom',
                                    rules:[{
                                        required: true,
                                        message: '必填'
                                    },{
                                        min: 5,
                                        max: 10,
                                        message: '长度不够哦'
                                    },{
                                        pattern:new RegExp('^\w+$','g'),//or '/^\w+$/g',
                                        message:'正则校验不通过'
                                    }]
                                })(<Input placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '123456',
                                    rules:[]
                                })(<Input type="password" placeholder="请输入密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.loginSubmitHandle}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录水平表单">
                    <Form style={{width:'400px'}}>
                        <FormItem>
                            <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(LoginForm);