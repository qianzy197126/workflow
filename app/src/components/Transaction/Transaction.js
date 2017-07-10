import React from 'react';
import {
	Button,
	Flex,
	WingBlank,
	WhiteSpace
} from 'antd-mobile';
import {
	Link
} from 'react-router';
import {
	PATH
} from '../../config/path';
import './Transaction.less';
import calendar from './calendar.png';

export default class Transaction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoCount: -1,
			doingCount: -1
		}
	}

	componentDidMount() {

		// let result2 = fetch(
		// 	PATH + 'getTotalAmount.do?type=1');

		if (this.state.todoCount === -1) {
			let result1 = fetch(PATH + 'getTotalAmount.do?type=0');
			result1.then((res) => {
				console.log(res);
				return res.json();
			}).then((json) => {
				console.log(json);
			}).catch((e) => {
				alert('获取错误!');
			});
		}
		// this.setState({
		// 	todoCount: ,
		// 	doingCount: result2,
		// });
	}
	render() {
		let type1 = 0;
		let type2 = 1;
		return (
			<div>
				<WingBlank size="lg">
					<div className='total'>
						<WingBlank size="lg">
							<WhiteSpace size="lg" />
								<div className='left'>
								</div>
								<div className='right'>
									<WingBlank>
										<WhiteSpace size="lg" />
										<span className='title'>在办事项</span>
										<br/>
										<br/>
										<span>在办事项共{this.state.doingCount}项</span>
										<WhiteSpace size="lg" />
										<div className='button-box'>
											<Link to={`/path/${type1}`} className='linkStyle'><span className='spanStyle'>点击查看</span></Link>
										</div>
										<WhiteSpace size="lg" />
									</WingBlank>
								</div>
							<WhiteSpace size="lg" />
						</WingBlank>
					</div>
					<WhiteSpace size="lg" />
					<WhiteSpace size="lg" />
					<div className='total'>
					<WingBlank size="lg">
						<WhiteSpace size="lg" />
							<div className='left'>
							</div>
							<div className='right'>
								<WingBlank>
									<WhiteSpace size="lg" />
									<span className='title'>待办事项</span>
									<br/>
									<br/>
									<span>待办事项共{this.state.todoCount}项</span>
									<WhiteSpace size="lg" />
									<div className='button-box'>
										<Link to={`/path/${type2}`} className='linkStyle'><span className='spanStyle'>点击查看</span></Link>
									</div>
									<WhiteSpace size="lg" />
								</WingBlank>
							</div>
						<WhiteSpace size="lg" />
					</WingBlank>
				</div>
				</WingBlank>
			</div>
		)
	}
}