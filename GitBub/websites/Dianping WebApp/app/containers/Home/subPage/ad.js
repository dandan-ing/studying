import React from 'react'
import 'Containers/Home/style.scss'

import 'Mock/homeList'
import {getRequestData} from 'Helper/http';

export default class AdList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        const result = getRequestData('/api/adlist');
        result.then((response)=>{
            if (response.data) {
                const data = response.data.data;
                this.setState({
                    data: data
                })
            }
        })
        .catch((error) => {
            console.log("ererrer");
        })
    }
    
    render() {
        let data = this.state.data;
        console.log("ad"+data);
        return (
            <div className="ad-block">
                <div className="ad-title">超值特惠</div>
                <div className="ad-content">
                {
                    data.length > 0 
                    ?
                    data.map((item, index)=>{
                        return (
                        <div key={index} className="ad-item">
                            {/* <div className="ad-item-title">{item.title}</div> */}
                            <div className="ad-item-keyword">{item.keyWord}</div>
                            <div className="ad-item-image"><img src={item.img} /></div>
                        </div>
                        )
                    })
                    :
                    ''
                }
                </div>
            </div>
        )
    }



}