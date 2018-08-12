import React from 'react';
import { Card, Button, Spin, Icon, Alert} from 'antd';
import '../admincommon.less';

export default class Loadings extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        const spinIcon = <Icon type="user"/>;
        const loadingIcon = <Icon type="loading"/>;
        return(
            <div>
                <Card title="Spin的使用" className="card-container">
                    <Spin size="samll"/>
                    <Spin />
                    <Spin size="large"/>
                    <Spin indicator={spinIcon} />
                </Card>
                <Card title="区块遮罩" className="card-container">
                    <Alert
                        message="Alert info"
                        description="你看到了啥效果？还满意吗？"
                        type="info"
                    />
                    <Alert
                        message="Alert warning"
                        description="你看到了啥效果？还满意吗？"
                        type="warning"
                    />
                    <Spin tip="加载中...">
                        <Alert
                            message="遮罩层 success"
                            description="在alert外面增加了spin遮罩"
                            type="success"
                        />
                    </Spin>
                    <Spin indicator={loadingIcon}>
                        <Alert
                            message="遮罩层 success"
                            description="在alert外面增加了spin遮罩"
                            type="success"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
