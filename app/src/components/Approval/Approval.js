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
			modal1: false,
			radio: {
				value: -1,
				label: ""
			},
			checkbox: [0, 0, 0]
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

	oncheckboxChange = (val) => {
		this.state.checkbox[val] = this.state.checkbox[val] === 1 ? 0 : 1;
	}

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

		const checkboxdata = [{
			value: 0,
			label: '邮件'
		}, {
			value: 1,
			label: '短信'
		}, {
			value: 2,
			label: '即时信息'
		}];

		return (
			<div className="approval">
				<List.Item>
					<Flex>
						<div className="title">审批意见：</div>
						<Flex>
							<Flex.Item>
								<input type="text" className="approvalshow" disabled="disabled" placeholder="请选择审批意见" value={this.state.radio.label}/>
							</Flex.Item>
							<Button className="btn" type="primary" inline onClick={this.showModal('modal1')}>请选择</Button>
						</Flex>
					</Flex>
				</List.Item>
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
								<RadioItem key={index} checked={this.state.radio.value === item.value} onChange={() => this.onChange(item.value, item.label)}>
									{item.label}
				        		</RadioItem>
				        	);
			        	})}
				    </List>
		        </Modal>

		        <List.Item>
		        	<Flex>
		        		<div className="title">提醒办理：</div>
		        		<List>
		        			{checkboxdata.map((item, index) => {
					        	return (<CheckboxItem key={index} onChange={() => this.oncheckboxChange(item.value)}>
					            	{item.label}
					            </CheckboxItem>)
					        })}
		        		</List>
		        	</Flex>
		        </List.Item>

		        <WhiteSpace size="lg" />
		      	<Flex>
					<Flex.Item>
		      		</Flex.Item>
		      		<Flex.Item>
		        		<Button type="primary">确认</Button>
		        	</Flex.Item>
		        	<Flex.Item>
		        		<Button type="ghost">返回</Button>
		        	</Flex.Item>
		        	<Flex.Item>
		      		</Flex.Item>
		      	</Flex>
			</div>
		);
	}
}

export default Approval;