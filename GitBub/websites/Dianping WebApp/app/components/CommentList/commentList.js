import React from 'react'
import Star from 'Components/Star/star'
import 'Components/CommentList/style.scss'

export default class CommnentList extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let commentList = this.props.commentList;
        //console.log(commentList);
        return (
            <div className="comment-block">
            {
                commentList.length 
                ?
                commentList.map((item, index)=>{
                    return (
                        <div key={index} className="comment-item">
                            <div className="userinfo">
                                <span><i className ="ishow-icon-menu"></i></span>
                                <span>{item.phone}</span>
                            </div>
                            <div className="star">
                                <Star starNum={item.star}/>
                            </div>
                            <div className="content">{item.content}</div>
                        </div>
                    )
                })
                :null
            }
                
            </div>
        )
    }
}