import React from 'react';
import { Card, Button, Carousel} from 'antd';
import '../admincommon.less';

export default class Carousels extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        return(
            <div>
                <Card title="文字背景轮播" className="card-container figure-carousel">
                    <Carousel autoplay effect="fade">
                        <div><h3>轮播1</h3></div>
                        <div><h3>轮播4</h3></div>
                        <div><h3>轮播5</h3></div>
                        <div><h3>轮播3</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="card-container img-carousel">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg"/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg"/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg"/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}