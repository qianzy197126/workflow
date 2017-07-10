import React from 'react'

import { List, InputItem,Button ,Flex, WingBlank, WhiteSpace ,Form} from 'antd-mobile';
import {
    PATH
} from '../../config/path'

import './LoginComponent.less';

class LoginComponent extends React.Component{

	constructor(props) {
        super(props);
        this.state = {
      		userName:"",
      		password:""
        }
        
    }

    userNameChange(value){
    	this.setState({
    		userName:value
    	})

    }
    
    passwordChange(value){
    	this.setState({
    		password:value
    	});
    }

    _submit(e){
    	const w=window.open('about:target');
		w.location.href='/mybutton';
     	let userName = this.state.userName;
     	let password = this.state.password;
     	//POST方式
        fetch(PATH+'login.do', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'userName='+userName&'password='+password
        }).then(function (res) {
            if(res.ok){
            	console.log(res);
                res.json().then(function (json) {
                    console.log(json);
                });
            }else{
                console.log('请求失败');
            }

        }).catch(function (e) {
            console.log("fetch fail");
        });
    }

	render(){
		return (
			<div>
			<WingBlank size='lg'>
				<div className='login-box'>
				  <h1 style={{textAlign:'center'}}>重庆公路局</h1>
		          <WingBlank size='lg'>
		          	<WhiteSpace size='lg' />
		          	<InputItem placeholder="请输入用户名" id='userName' value={this.state.userName} onChange={this.userNameChange.bind(this)}>用户名</InputItem>
		          	<WhiteSpace size='lg' />
		          	<WhiteSpace size='lg' />
			        <InputItem type="password" placeholder="请输入密码" value={this.state.password} onChange={this.passwordChange.bind(this)}>密码</InputItem>
			        <WhiteSpace size='lg' />
			        <WhiteSpace size='lg' />
			        <Button className="btn" type="primary" onClick={this._submit.bind(this)}>登&nbsp;&nbsp;&nbsp;录</Button>
			        <WhiteSpace size='lg' />
			        <WhiteSpace size='lg' />
		          </WingBlank>
		  		</div>
		  	</WingBlank>
			</div>
			)
	}
}

export default LoginComponent