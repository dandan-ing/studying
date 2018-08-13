import React from 'react';
import { Card, Table, Modal,message, Button, Form, Select} from 'antd';
import { ajax ,getRequestData} from '../../axios/index.js';
import Utils from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

class BaseForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    initFormList = () => {
        const { getFieldDecorator} = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length) {
            formList.forEach((item, i) => {
                let label = item.label;
                let field = item.field;
                let initalValue = item.initalValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                if (item.type == 'select') {
                    const select = <FormItem label={label} key={field}>
                    {
                        getFieldDecorator([field], {
                            initalValue:initalValue
                        })(
                            <Select placeholder={placeholder}>
                                {Utils.getOptionData(item.list)}
                            </Select>
                        )
                    }
                    </FormItem>
                    formItemList.push(select);
                } else if (item.type == 'input') {
                    const input = <FormItem>
                    {
                        getFieldDecorator([field], {
                            initalValue:initalValue
                        })(
                            <Input type="text" placeholder={placeholder}/>
                        )
                    }
                    </FormItem>
                    formItemList.push(input);
                }
            })
        }

        return formItemList;
    }

    render(){
        return (
            <Form>
                {
                    getFieldDecorator([field], {
                        initalValue:initalValue
                    })(
                        <Select placeholder={placeholder}>
                            {Utils.getOptionData(item.list)}
                        </Select>
                    )
                }
            </Form>
        )
    }
}

export default Form.create()(BaseForm);