import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';

//无状态组件，即一个函数。性能高
// const TodoListUI = (props) => {
//     return <div style={{margin:'10px'}}>
//         <Input 
//         value={this.props.inputValue} 
//         placeholder="todo info" 
//         style={{width:'300px',marginRight:'10px',marginBottom:'10px'}}
//         onChange={this.props.changeHandle}
//         /> 
//         <Button type="primary" onClick={this.props.clickHandle}>提交</Button>
//         <List
//             bordered
//             dataSource = {this.props.list}
//             renderItem={(item,index)=>(<List.Item>{item}<Button onClick={index=> {this.props.delhandle(index)}}>删除</Button></List.Item>)}
//             style={{width:'400px'}}
//         />
//     </div>
// }

//普通组件,只有render的普通组件可改外无状态组件
export default class TodoListUI extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div style={{margin:'10px'}}>
               <Input 
                value={this.props.inputValue} 
                placeholder="todo info" 
                style={{width:'300px',marginRight:'10px',marginBottom:'10px'}}
                onChange={this.props.changeHandle}
                /> 
               <Button type="primary" onClick={this.props.clickHandle}>提交</Button>
               <List
                    bordered
                    dataSource = {this.props.list}
                    renderItem={(item,index)=>(<List.Item>{item}<Button onClick={index=> {this.props.delhandle(index)}}>删除</Button></List.Item>)}
                    style={{width:'400px'}}
                />
            </div>
        )
    }
}