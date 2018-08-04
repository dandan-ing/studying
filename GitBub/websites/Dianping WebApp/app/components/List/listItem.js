import React from 'react'
import 'Components/List/style.scss'
import { Link } from 'react-router-dom'

export default class ListItem extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let data = this.props.listData;
        //console.log(data);
        {
            return(
                data.length > 0 ?  data.map((item, index)=>{
                    return (
                        <Link to={"/detail/"+item.id} key={index}>
                            <div className="list-item-block">
                                <div className="list-item-image">
                                    <img src={item.img}/>
                                </div>
                                <div className="list-item-detail">
                                    <div className="item-title">
                                        <span className="title">{item.title}</span>
                                        <span className="distance">{item.distance}</span>
                                    </div>
                                    <div className="keyword">{item.subTitle}</div>
                                    <div className="detail-price">
                                        <span className="price">{item.price}</span>
                                        <span className="sales">已售 {item.mumber}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }) : null 
            )
        }
    }
}