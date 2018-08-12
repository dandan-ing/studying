import React from 'react';
import { Card, Button} from 'antd';
import '../admincommon.less';

export default class Buttons extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        return(
            <div>
                <Card title="基础按钮" className="card-container">
                    <Button type="primary">Orange</Button>
                    <Button>Orange</Button>
                    <Button type="dashed">dashed</Button>
                    <Button type="danger">danger</Button>
                    <Button disabled>禁用按钮</Button>
                </Card>
                <Card title="图标按钮" className="card-container">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="search">搜索</Button>
                </Card>
                <Card title="加载中按钮" className="card-container">
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" size="small" loading>Loading</Button>
                    <Button icon="search">搜索</Button>
                </Card>
                <Card title="不同尺寸按钮" className="card-container">
                    <Button type="primary" size="small">小按钮</Button>
                    <Button type="primary">中等按钮</Button>
                    <Button type="primary" size="large">大按钮</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left">前进</Button>
                        <Button type="primary" icon="right">后退</Button>
                    </Button.Group>
                </Card>
            </div>
        )
    }
}