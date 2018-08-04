import React from 'react'
import Star from 'Components/Star/star'
import 'Components/DetailInfo/style.scss'

export default class  extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let info = this.props.info;
        return (
            <div className="detail-block">
                <div className="detail-info">
                    <div className="detail-img"><img src={info.img} /></div>
                    <div className="detail-content">
                        <div className="title">
                            {info.title}
                        </div>
                        <div className="star-price">
                            <span className="star">
                                <Star starNum={info.star} />
                            </span>
                            <span className="price">{info.price}</span>
                        </div>
                        <div className="sub-title">{info.subTitle}</div>
                    </div>
                </div>
                <div className="detail-detail" dangerouslySetInnerHTML={{__html: info.desc}}>
                </div>
            </div>
        )
    }
}