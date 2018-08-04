import React from 'react'
import Header from 'Components/Header/header'
import Info from 'Containers/Detail/subPage/info'
import Buy from 'Containers/Detail/subPage/buy'
import Comment from 'Containers/Detail/subpage/comment'
import 'Containers/Detail/style.scss'

export default class Detail extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={this.props.match.params.id}/>
                <Buy id={this.props.match.params.id}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }


}