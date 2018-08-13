import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';
import store from "./store";
import {changeHandleAction, addHandleAction,delHandleAction} from './store/actionCreators';

export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.changeStoreHandle);
    }

    changeStoreHandle = () => {
        this.setState(store.getState());
    }

    changeHandle(e) {
        const action = changeHandleAction(e.target.value);
        store.dispatch(action);
    }

    clickHandle = () => {
        const action = addHandleAction();
        store.dispatch(action);
    }

    delhandle = (index) => {
        const action = delHandleAction(index);
        store.dispatch(action);
    }

    render(){
        return(
            <div style={{margin:'10px'}}>
               <Input 
                value={this.state.inputValue} 
                placeholder="todo info" 
                style={{width:'300px',marginRight:'10px',marginBottom:'10px'}}
                onChange={this.changeHandle.bind(this)}
                /> 
               <Button type="primary" onClick={this.clickHandle}>提交</Button>
               <List
                    bordered
                    dataSource = {this.state.list}
                    renderItem={(item,index)=>(<List.Item>{item}<Button onClick={this.delhandle.bind(this,index)}>删除</Button></List.Item>)}
                    style={{width:'400px'}}
                />
            </div>
        )
    }
}