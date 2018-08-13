import React from 'react';
import 'antd/dist/antd.css';
import store from "./store";
import {changeHandleAction, addHandleAction,delHandleAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

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
        const value = e.target.value;
        const action = changeHandleAction(value);
        store.dispatch(action);
    }

    clickHandle() {
        const action = addHandleAction();
        store.dispatch(action);
    }

    delhandle(index){
        const action = delHandleAction(index);
        store.dispatch(action);
    }

    render(){
        return (
            <div>
                <TodoListUI 
                    inputValue={this.state.inputValue}
                    changeHandle={this.changeHandle.bind(this)}
                    clickHandle={this.clickHandle.bind(this)}
                    delhandle={this.delhandle.bind(this)}
                    list = {this.state.list}
                />
            </div>
        )
    }
}