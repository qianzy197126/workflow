import React from 'react';
import {
	Modal,
	Button,
	WhiteSpace,
	WingBlank,
	Radio,
	List,
	InputItem
} from 'antd-mobile';
import './approval.less';

const RadioItem = Radio.RadioItem;
class Approval extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			value: -1,
			label: ""
		}
	}

	showModal = key => (e) => {
		e.preventDefault();
		this.setState({
			[key]: true,
		});
	}

	onChange = (value, label) => {
		this.setState({
			value,
			label
		});
	};

	onClose = key => () => {
		this.setState({
			[key]: false
		});
	}

	render() {
		const data = [{
			value: 0,
			label: '已阅'
		}, {
			value: 1,
			label: '请阅示'
		}, {
			value: 2,
			label: '已办理'
		}, {
			value: 3,
			label: '请办理'
		}, {
			value: 4,
			label: '不同意'
		}, {
			value: 5,
			label: '同意'
		}, {
			value: 6,
			label: '同意发'
		}];
		return (
			<div className="approval">
				<WhiteSpace />
				<div className="cardcontent">
					<div className="carditem">
						<div className="title">审批意见：</div>
						<div className="content">
							<input type="text" className="approvalshow" disabled="disabled" value={this.state.label}/>
							<Button className="btn" type="primary" inline onClick={this.showModal('modal1')}>请选择</Button>
						</div>
					</div>
				</div>
		        <WhiteSpace />
		        <Modal
		          title="请选择审批意见"
		          transparent
		          maskClosable={false}
		          visible={this.state.modal1}
		          onClose={this.onClose('modal1')}
		          footer={[{ text: '确定', onPress: () => { this.onClose('modal1')(); } }]}
		        >
			        <List>
			        	{data.map((item, index) => {
							return (
								<RadioItem key={index} checked={this.state.value === item.value} onChange={() => this.onChange(item.value, item.label)}>
									{item.label}
				        		</RadioItem>
				        	);
			        	})}
				    </List>
		        </Modal>
			</div>
		);
	}
}

export default Approval;