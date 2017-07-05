import React from 'react';
import {
	Modal,
	Button,
	WhiteSpace,
	Radio,
	List,
	InputItem,
	Flex,
	Checkbox
} from 'antd-mobile';
import './approval.less';

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;
class Approval extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			radio: {
				value: -1,
				label: ""
			}
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
			radio: {
				value: value,
				label: label
			}
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
				<Flex direction="row" justify="start">
					<Flex.Item><span className="title">审批意见：</span></Flex.Item>
					{/*<div className="title">审批意见：</div>*/}
					<Flex.Item style={{flexShrink: 1}}>
						{/*<input type="text" className="approvalshow" disabled="disabled" placeholder="请选择审批意见" value={this.state.radio.label}/>*/}
						<span className="approvalshow"> {this.state.radio.label ? this.state.radio.label : '请选择审批意见'}</span>
					</Flex.Item>
					<Flex.Item>
						<Button className="btn" type="primary" inline size="large" onClick={this.showModal('modal')}>选择意见</Button>
					</Flex.Item>
				</Flex>

		        <Modal
		          title="请选择审批意见"
		          transparent
		          maskClosable={false}
		          visible={this.state.modal}
		          onClose={this.onClose('modal')}
		          footer={[{ text: '确定', onPress: () => { this.onClose('modal')(); } }]}
		        >
			        <List>
			        	{data.map((item, index) => {
							return (
								<RadioItem key={index} checked={this.state.radio.value === item.value} onChange={() => this.onChange(item.value, item.label)}>
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