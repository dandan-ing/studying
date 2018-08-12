import React from 'react';
import { Card, Row, Col} from 'antd';
import '../admincommon.less';

const imgs = [
    ['1.png','2.png','3.png','4.png','5.png'],
    ['6.png','7.png','8.png','9.png','10.png'],
    ['11.png','12.png','13.png','14.png','15.png'],
    ['16.png','17.png','18.png','19.png','20.png'],
    ['21.png','22.png','23.png','24.png','25.png']
];
const imgList = imgs.map((list) => list.map((item)=>{
    return (<Card cover={<img src={'/gallery/'+item} />}>
        <Card.Meta
        title="card meta title"
        description="card meta desc"
        />
    </Card>)
}));
export default class Gallery extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        return(
            <div>
                 <Row gutter={10}>
                {
                    imgList.map((item,index) => {
                        return (
                            <Col md={4} key={index}>
                                {imgList[index]}
                            </Col>
                        )
                    })
                }
                 </Row>
            </div>
        )
    }
}