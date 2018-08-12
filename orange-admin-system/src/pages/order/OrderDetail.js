import React from 'react';
import { Card, Table, Modal,message, Button, Form} from 'antd';
import { ajax ,getRequestData} from '../../axios/index.js';
import './detail.less';

import '../../mock/order.js'

const FormItem = Form.Item;

export default class OrderDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            orderInfo:{}
        }
    }

    componentDidMount() {
        let orderId = this.props.match.params.orderId;
        if (orderId) {
            this.getOrderDetail(orderId);
        }
    }

    getOrderDetail = (orderId) => {
        const data = getRequestData('/api/order/detail');
        data.then((res)=>{
            if (res.data.success) {
                let orderInfo = res.data.data;
                this.setState({
                    orderInfo
                })
                this.renderMap(res.data.data);
            } else {
                Modal.info({
                    title:'提示',
                    content:res.data.msg
                });
            }
        })
    }

    renderMap = (result)=>{
        this.map = new window.BMap.Map('orderDetailMap');
        // this.map.centerAndZoom('北京',11);
        // 添加地图控件
        this.addMapControl();
        // 调用路线图绘制方法
        this.drawBikeRoute(result.position_list);
        // 调用服务区绘制方法
        this.drwaServiceArea(result.area);
    }

    // 添加地图控件
    addMapControl = ()=>{
        let map = this.map;
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }

     // 绘制用户的行驶路线
     drawBikeRoute = (positionList)=>{
        let map = this.map;
        let startPoint = '';
        let endPoint = '';
        if (positionList.length>0){
            let first = positionList[0];
            let last = positionList[positionList.length-1];
            startPoint = new window.BMap.Point(first.lon,first.lat);
            let startIcon = new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
                imageSize:new window.BMap.Size(36,42),
                anchor: new window.BMap.Size(18, 42)
            })

            let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon});
            this.map.addOverlay(startMarker);

            endPoint = new window.BMap.Point(last.lon, last.lat);
            let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(18, 42)
            })
            let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon });
            this.map.addOverlay(endMarker);

            // 连接路线图
            let trackPoint = [];
            for(let i=0;i<positionList.length;i++){
                let point = positionList[i];
                trackPoint.push(new window.BMap.Point(point.lon, point.lat));
            }

            let polyline = new window.BMap.Polyline(trackPoint,{
                strokeColor:'#1869AD',
                strokeWeight:3,
                strokeOpacity:1
            })
            this.map.addOverlay(polyline);
            this.map.centerAndZoom(endPoint, 11);
        }
        
    }

    // 绘制服务区
    drwaServiceArea = (positionList)=>{
        // 连接路线图
        let trackPoint = [];
        for (let i = 0; i < positionList.length; i++) {
            let point = positionList[i];
            trackPoint.push(new window.BMap.Point(point.lon, point.lat));
        }
        // 绘制服务区
        let polygon = new window.BMap.Polygon(trackPoint, {
            strokeColor: '#CE0000',
            strokeWeight: 4,
            strokeOpacity: 1,
            fillColor: '#ff8605',
            fillOpacity:0.4
        })
        this.map.addOverlay(polygon);
    }

    render(){
        let orderInfo = this.state.orderInfo;
        return (
            <div className="order-detail">
                <Card>
                    <div id="orderDetailMap" className="order-detail-map"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <div className="detail-form">
                            <li>
                                <div className="detail-form-title">订单编号</div>
                                <div className="detail-form-content">{orderInfo.orderId}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">下单时间</div>
                                <div className="detail-form-content">{orderInfo.time}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">订单状态</div>
                                <div className="detail-form-content">{orderInfo.status}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">用户名</div>
                                <div className="detail-form-content">{orderInfo.username}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">手机号</div>
                                <div className="detail-form-content">{orderInfo.phone}</div>
                            </li>
                        </div>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">详细信息</div>
                        <div className="item-detail">
                            <li>
                                <div className="detail-form-title">出发日期</div>
                                <div className="detail-form-content">{orderInfo.startDate}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">归来日期</div>
                                <div className="detail-form-content">{orderInfo.backDate}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">产品名称</div>
                                <div className="detail-form-content">{orderInfo.productname}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">总金额</div>
                                <div className="detail-form-content">{orderInfo.amount}</div>
                            </li>
                            <li>
                                <div className="detail-form-title">应付金额</div>
                                <div className="detail-form-content">{orderInfo.money}</div>
                            </li>
                        </div>
                    </div>
                </Card>

            </div>
        )
    }
}
