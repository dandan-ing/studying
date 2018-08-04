import React from 'react'
import 'Components/LoginInput/style.scss'

export default class LoginInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    clickHandle(){
        const username = this.state.username;
        const password = this.state.password;
        if (username !=='') {
            this.props.loginHandler(username);
        }else {
            return;
        }
    }

    changeUserName(e) {
        this.setState({
            username: e.target.value.trim()
        })
    }

    changePassword(e){

    }
    
    render() {
        return (
            <div className="login-input">
                <div>
                    <div className="input-item">
                        <input 
                        type="text" 
                        placeholder="请输入手机号" 
                        value={this.state.username}
                        onChange={this.changeUserName.bind(this)}
                        />
                    </div>
                    <div className="input-item">
                        <input 
                        type="text" 
                        placeholder="请输入验证码"
                        value={this.state.password}
                        onChange={this.changePassword.bind(this)}
                        />
                    </div>
                    <div className="input-item">
                        <button className="btn-login" onClick={this.clickHandle.bind(this)}>登 录</button>
                    </div>
                </div>
            </div>
        )
    }
}