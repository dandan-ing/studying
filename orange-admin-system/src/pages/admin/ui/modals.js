import React from 'react';
import { Card, Button, Modal} from 'antd';
import '../admincommon.less';

export default class Modals extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }

    clickHandle = (type) => {
        this.setState({
            [type]: true
        })
    }

    clickHandleConfirm = (type) => {
        Modal[type]({
            title: "确认？",
            content:"这是个确认弹出框，你看到了吗？",
            onOk(){
                console.log("ok");
            },
            onCancel(){
                console.log("cancle");
            }
        })
    }
    
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-container">
                    <Button type="primary" onClick={() => this.clickHandle('showModal1')}>基础弹框</Button>
                    <Button type="primary" onClick={() => this.clickHandle('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.clickHandle('showModal3')}>自定义位置</Button>
                    <Button type="primary" onClick={() => this.clickHandle('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal title="对话框" visible={this.state.showModal1} onCancel={()=>{
                    this.setState({
                        showModal1: false
                    })
                }}>
                    <p>世界真美好！</p>
                </Modal>

                <Modal title="自定义页脚对话框" visible={this.state.showModal2} onCancel={()=>{
                    this.setState({
                        showModal2: false
                    })
                   
                }}
                    okText="真的要取消"
                    cancelText="真滴要取消啊"
                >
                    <p>世界真美好！</p>
                </Modal>

                <Modal 
                    title="自定义位置对话框" 
                    visible={this.state.showModal3} 
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                    style={{top:20}}
                >
                    <p>世界真美好！</p>
                </Modal>

                <Modal 
                    title="水平垂直居中" 
                    centered
                    visible={this.state.showModal4} 
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}

                >
                    <p>世界真美好！</p>
                </Modal>

                <Card title="信息确认框" className="card-container">
                    <Button type="primary" onClick={() => this.clickHandleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.clickHandleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.clickHandleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.clickHandleConfirm('warn')}>warn</Button>
                </Card>

            </div>
        )
    }
}
