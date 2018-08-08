import React from 'react';

export default class PageTitle extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        document.title = this.props.title + '- Admin-Admin';
    }
    render(){
        return(
            <div>
                <div className="page-title">
                    <div className="title_left">
                        <h3>{this.props.title}</h3>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}