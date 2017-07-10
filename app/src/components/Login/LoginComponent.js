import React from 'react'

import {
	List,
	InputItem,
	Button,
	Flex,
	WingBlank,
	WhiteSpace
} from 'antd-mobile';

class LoginComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
	          <WingBlank size='lg'>
	          	<WhiteSpace size='lg' />
	          	<InputItem placeholder="请输入用户名">用户名</InputItem>
	          	<WhiteSpace size='lg' />
	          	<WhiteSpace size='lg' />
		        <InputItem placeholder="请输入密码">密&nbsp;码</InputItem>
		        <WhiteSpace size='lg' />
		        <WhiteSpace size='lg' />
		        <Button className="btn" type="primary">登&nbsp;&nbsp;&nbsp;录</Button>
	          </WingBlank>
	  		</div>
		)
	}
}

export default LoginComponent