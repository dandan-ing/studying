import React from 'react'
import 'Components/UserInfo/style.scss'

export default class UserInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {
        let userinfo = this.props.userinfo;
        console.log(userinfo);
        return (
            <div className="userinfo-block">
                <div className="userinfo-item">
                    <i className="ishow-icon-menu"></i>
                    {userinfo.username}
                </div>
                <div className="userinfo-item">
                    <i className="ishow-icon-arrow-left"></i>
                    {userinfo.cityName}
                </div>
            </div>
        )
    }
}