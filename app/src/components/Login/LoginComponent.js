import React from 'react'
import {
	List,
	InputItem,
	Button,
	Flex,
	WingBlank,
	WhiteSpace,
	Form
} from 'antd-mobile';
import {
	PATH
} from '../../config/path'
import {
	hashHistory
} from 'react-router';

import './LoginComponent.less';


class LoginComponent extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			userName: "",
			password: ""
		}

	}

	userNameChange(value) {
		this.setState({
			userName: value
		})

	}

	passwordChange(value) {
		this.setState({
			password: value
		});
	}

	_submit(e) {
		let userName = this.state.userName;
		let password = this.state.password;

		//POST方式
		fetch(PATH + `login/${userName}/${password}.do`, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: ""
		}).then((res) => {
			console.log(res);
			if (res.ok) {
				hashHistory.push('/transcation');
				return res.josn();
			} else {
				alert('请求失败');
			}
		}).then((json) => {

		}).catch((e) => {
			alert('请求失败');
		});
	}

	render() {
		return (
			<div className="logincomponent">
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
				        <Button className="btn" type="primary" onClick={this._submit.bind(this)}><span>登&nbsp;&nbsp;&nbsp;录</span></Button>
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