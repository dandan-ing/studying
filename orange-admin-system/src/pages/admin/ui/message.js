import React from 'react';
import { Card, Button,message} from 'antd';
import '../admincommon.less';

export default class Message extends React.Component{
    constructor(props) {
        super(props)
    }

    showMessage = (type) =>{
        message[type]("告诉你，明天是五月五号！")
    }
    
    render(){
        return(
            <div>
                <Card title="全局提示框" className="card-container">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>loading</Button>
                    <p>查询成功或操作成功提示，几秒后自动消失！</p>
                </Card>
            </div>
        )
    }
}