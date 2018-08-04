import React from 'react'
import 'Components/OrderList/OrderListItem/style.scss'

export default class OrderListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //0 未评价 1 评价中 2 已评价
            commentState: 1
        }
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.orderinfo.commentState
        })
    }

    clickCommentHandle() {
        this.setState({
            commentState: 1
        })
    }

    saveCommentHandle() {
        const id = this.props.orderinfo.id;
        const value = this.refs.commenteditor.value.trim();
        if (!value) {
            return value;
        }
        this.props.submitCommitFn(id, value, this.saveCallback.bind(this));
    }

    saveCallback(){
        this.setState({
            commentState: 2
        })
    }

    cancleCommenthandle() {
        this.setState({
            commentState: 0
        })
    }
    
    render() {
        let item = this.props.orderinfo;
        return (
            <div className="item">
                <div className="img"><img src={item.img}/></div>
                <div className="content">
                    <div className="info">
                        <div>商户：{item.title}</div>
                        <div>数量：{item.mumber}</div>
                        <div>价格：{item.price}</div>
                        {
                            this.state.commentState===0
                            ?
                            <div className="btn">
                                <button onClick={this.clickCommentHandle.bind(this)}>评价</button>
                            </div>
                            :
                            this.state.commentState===2
                            ?
                            <div className="btn">
                                <button className="disabled">已评价</button>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                {
                   this.state.commentState===1
                   ? 
                    <div className="comment-editor">
                        <div >
                            <textarea ref="commenteditor"></textarea>
                        </div>
                        <div>
                            <button className="submit" onClick={this.saveCommentHandle.bind(this)}>提交</button>
                            &nbsp;
                            <button className="cancle" onClick={this.cancleCommenthandle.bind(this)}>取消</button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}