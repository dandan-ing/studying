import React from 'react'
import 'Components/LoadMore/style.scss'

export default class LoadMore extends React.Component{
    constructor(props) {
        super(props);
    }

    loadMoreHandle() {
        //执行父组件传递的函数
        console.log("加载更多");
        this.props.loadMoreFn();
    }

    componentDidMount() {
        //实现上拉，加载更多。“加载更多”到达可视区域时，触发加载更多动作
        let timeId;
        let wrapper = this.refs.loadMore;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHieght = window.screen.height;
            console.log("top"+top);
            console.log("windowHieght"+windowHieght);
            if (top && top < windowHieght) {
                console.log("自动加载");
                this.loadMoreFn();
            }
        }
        window.addEventListener('scroll', function(){
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeId) {
                clearTimeout(timeId);
            }
            timeId = setTimeout(callback, 50)
        }.bind(this), false);
    }

    render() {
        let isLoadingMore = this.props.isLoadingMore;
        return (
            <div className="load-more" ref="loadMore">
                {
                    isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}