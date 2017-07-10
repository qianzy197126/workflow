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
import {
	PATH
} from '../../config/path';

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;
class Approval extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
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

		this.props.setcomments(this.state.radio);
	}

	componentDidMount() {
		console.log(55);
		let result = fetch(PATH + 'getComments.do');

		result.then((res) => {
			return res.json();
		}).then((json) => {
			console.log(JSON.parse(json));
			this.setState({
				data: JSON.parse(json)
			})
		});
	}

	render() {
		if (this.state.data.length === 0) {
			return <div>请稍等</div>
		} else {
			return (
				<div className="approval">
				<Flex direction="row" justify="start">
					<Flex.Item><span className="title">审批意见：</span></Flex.Item>
					<Flex.Item style={{flexShrink: 1}}>
						<span className="approvalshow"> {this.state.radio.label ? this.state.radio.label : '请选择审批意见'}</span>
					</Flex.Item>
					<Flex.Item>
						<Button className="btn" type="primary" inline size="large" disabled={this.props.isback? 'disbaled':''} onClick={this.showModal('modal')}>选择意见</Button>
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
			        	{this.state.data.map((item, index) => {
							return (
								<RadioItem key={index} checked={this.state.radio.value === item.VALUE} onChange={() => this.onChange(item.VALUE, item.LABEL)}>
									{item.LABEL}
				        		</RadioItem>
				        	);
			        	})}
				    </List>
		        </Modal>
			</div>
			);
		}
	}
}

export default Approval;