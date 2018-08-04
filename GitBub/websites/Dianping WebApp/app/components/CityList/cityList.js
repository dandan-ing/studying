import React from 'react'
import 'Components/CityList/style.scss'

export default class CityList extends React.Component{
    constructor(props, context) {
        super(props, context)
    }

    clickHandle(city){
        console.log(city);
        this.props.changeFn(city);
    }

    render() {
        let cityList = this.props.cityList;
        return (
            <div className="citylist-block">
                <div className="title">热门城市</div>
                <div className="content">
                {
                    cityList.length 
                    ?
                    cityList.map((item,index)=>{
                        return (
                            <div key={index} className="item" onClick={this.clickHandle.bind(this, item)}>{item}</div>
                        )
                    })
                    :
                    <div></div>
                }
                </div>
            </div>
        )
    }
}