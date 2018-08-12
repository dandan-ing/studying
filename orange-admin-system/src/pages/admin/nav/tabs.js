import React from 'react';
import { Card, Button,Tabs,message,Icon} from 'antd';
import '../admincommon.less';

const TabPane = Tabs.TabPane;

export default class Tab extends React.Component{
    constructor(props) {
        super(props)
        this.newTabIndex = 0;
        
    }

    componentWillMount() {
        const panes = [
            {
                title:'Tab title 1',
                key:'1',
                content:'content 1'
            },
            {
                title:'Tab title 2',
                key:'2',
                content:'content 2'
            },
            {
                title:'Tab title 3',
                key:'3',
                content:'content 3'
            }
        ];
        this.setState({
            panes,
            activeKey: panes[0].key
        })
    }

    onChangeHandle = (key) =>{
        message.info("你选择了标签页："+ key);
    }

    onChangeActiveHandle = (activeKey) =>{
        
    }

    onEditHandle = (targetkey, action) => {
        this[action](targetkey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `新增的Tab${this.newTabIndex++}`;
        panes.push({
            title: `new Tab${activeKey}`,
            content: 'New Tab Content',
            key: activeKey
        });
        this.setState({
            panes,
            activeKey
        });
    }

    remove = (targetkey) => {
        let activeKey = this.state.activeKey;
        let lastindex;
        this.state.panes.forEach((pane, i)=>{
            if (pane.key === targetkey) {
                lastindex = i -1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetkey);
        if (lastindex >= 0 && activeKey === targetkey) {
            activeKey = panes[lastindex].key;
        }
        this.setState({
            panes,
            activeKey
        })
    }
    
    render(){
        return(
            <div>
                <Card title="Tab" className="card-container">
                    <Tabs defaultActiveKey="1" onChange={this.onChangeHandle}>
                        <TabPane tab="Tab 1" key="1">这是Tab 1</TabPane>
                        <TabPane tab="Tab 2" disabled key="2" >这是Tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">这是Tab 3</TabPane>
                    </Tabs>
                </Card>

                <Card title="带图标的Tab" className="card-container">
                    <Tabs defaultActiveKey="1" onChange={this.onChangeHandle}>
                        <TabPane tab={<span><Icon type="user"/>Tab 1</span>} key="1">这是Tab 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">这是Tab 2</TabPane>          
                    </Tabs>
                </Card>

                <Card title="动态Tab" className="card-container">
                    <Tabs 
                        onChange={this.onChangeActiveHandle} 
                        onEdit={this.onEditHandle}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                    >
                        {
                            this.state.panes.map((tabPaneItem, index)=>{
                                return (
                                    <TabPane tab={tabPaneItem.title} key={tabPaneItem.key}>
                                        {tabPaneItem.content}
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>

                
            </div>
        )
    }
}