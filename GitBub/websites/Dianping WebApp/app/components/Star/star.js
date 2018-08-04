import React from 'react'
import 'Components/Star/style.scss'

export default class Star extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let starNum = this.props.starNum;
        return (
            <div className="star-block">
                {
                    [1,2,3,4,5].map((item)=>{
                        let clName;
                        if (starNum > item) {
                            clName = "start-light";
                        } else {
                            clName = "star-no-light";
                        }
                        return  <i className ={"ishow-icon-star-on "+clName} key={item}></i>
                    })
                }
                
            </div>
        )
    }
}