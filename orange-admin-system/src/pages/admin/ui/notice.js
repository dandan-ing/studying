import React from 'react';
import { Card, Button, notification} from 'antd';
import '../admincommon.less';

export default class Notice extends React.Component{
    constructor(props) {
        super(props)
    }

    openNotifcation = (type,direction)=>{
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message:"今天周五啦",
            description:"一周就要结束啦"
        });
    } 
    
    render(){
        return(
            <div> 
                <Card title="通知提醒框" className="card-container">
                    <Button type="primary" onClick={()=>this.openNotifcation('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('error')}>error</Button>
                </Card>
                <Card title="通知提醒框方向" className="card-container">
                    <Button type="primary" onClick={()=>this.openNotifcation('success','topLeft')}>左上角</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('info','topRight')}>左下角</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('warning','bottomLeft')}>右上角</Button>
                    <Button type="primary" onClick={()=>this.openNotifcation('error','bottomRight')}>右下角</Button>
                </Card>
            </div>
        )
    }
}