import React from 'react';
import { getRequestData } from 'util/http';

import 'mock/login'

export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeFormHandle(e, key) {
        console.log(key+":value:"+e.target.value);
        this.setState({
            key: e.target.value
        });
    }

    clickHandle() {
        const res = getRequestData("/api/login");
        res.then((res)=>{
            if (res.data.success) {
                window.location.href="/";
                //this.props.history.push("/");
            } else {
                alert(res.data.msg);
            }
        })
    }


    render(){
        return(
            <div className="login">
                <div className="login_wrapper">
                    <div className="animate form login_form">
                        <section className="login_content">
                            <form>
                                <h1>登 录</h1>
                                <div>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="请输入用户名" 
                                    required="" 
                                    onChange={(e)=>this.changeFormHandle(e,'username')}
                                    />
                                </div>
                                <div>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                    required="" 
                                    onChange={(e)=>this.changeFormHandle(e,'password')}
                                    />
                                </div>
                                <div>
                                    <button 
                                    className="btn btn-primary submit" 
                                    style={{width:'100%'}} 
                                    onClick={this.clickHandle}
                                    >登 录</button>
                                </div>
                                <div className="clearfix"></div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}