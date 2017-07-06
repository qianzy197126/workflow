import React from 'react';
import {
	WhiteSpace,
	Accordion,
	List,
	Flex,
	Button,
	Modal,
	Radio
} from 'antd-mobile';
import './cardList.less';

const RadioItem = Radio.RadioItem
class CardList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			reviewsteps: [],
			modal: false,
			radio: {
				value: -1,
				label: ""
			}
		}
	}

	componentDidMount() {
		let result = fetch('http://222.198.39.25:8181/MOA/getWaitingMatterInfoByID.do?runID=8976290');
		result.then((res) => {
			return res.json();
		}).then((json) => {
			console.log(JSON.parse(json));
			this.setState({
				data: JSON.parse(json)
			});
		});

		let result2 = fetch("http://222.198.39.25:8181/MOA/getNextTask.do", {
			method: 'POST',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: "processName=" + "公路局行政发文处理笺" + "&taskName=" + this.state.data.TASKNAME
		});

		result2.then((res) => {
			return res.json();
		}).then((json) => {
			this.setState({
				reviewsteps: JSON.parse(json)
			});
		})
	}

	showModal = key => (e) => {
		e.preventDefault();
		this.setState({
			[key]: true,
		});
	}

	onClose = key => () => {
		this.setState({
			[key]: false
		});
	}

	onChange = (value, name) => {
		this.setState({
			radio: {
				value: value,
				name: name
			}
		});
	};

	render() {
		let message;
		if (!this.state.data) {
			message = <div>正在加载...</div>
		} else {
			message = (
				<div className="cardlist">
					<List.Item>
						<Flex>
							<div className="title">拟稿部门：</div>
							<div className="content">{this.state.data.ORGDEP_NAME}</div>
						</Flex>
					</List.Item>

					<List.Item>
						<Flex>
							<Flex.Item>
								<Flex>
									<div className="title">拟稿人：</div>
									<div className="content">{this.state.data.CREATOR}</div>
								</Flex>
							</Flex.Item>
							<Flex.Item>
								<Flex>
									<div className="title">核稿人：</div>
									<div className="content">{this.state.data.REVIEW_USER_NAME}</div>
								</Flex>
							</Flex.Item>
						</Flex>
					</List.Item>

					<WhiteSpace size="lg" />
					<List.Item>
						<Flex>
							<Flex.Item>
								<Flex>
									<div className="title">主送：</div>
									<div className="content">{this.state.data.SEND_TO}</div>
								</Flex>
							</Flex.Item>
							<Flex.Item>
								<Flex>
									<div className="title">抄送：</div>
									<div className="content">{this.state.data.CC_TO}</div>
								</Flex>
							</Flex.Item>
						</Flex>
					</List.Item>

					<List.Item>
						<Flex>
							<div className="title">发文单位：</div>
							<div className="content">{this.state.data.ISSUEDEP}</div>
						</Flex>
					</List.Item>

					<List.Item>
						<Flex>
							<div className="title">公文正文：</div>
							<div className="content">{this.state.data.ARCHIVESNO}</div>
						</Flex>
					</List.Item>

					<Accordion accordion openAnimation={{}} className="my-accordion">
				        <Accordion.Panel header={
								<Flex>
									<div className="title">公文附件：</div>
									<div className="content">{this.state.data.ENCLOSURE ? this.state.data.ENCLOSURE : '无'}</div>
								</Flex>
				        }>
				            <List className="my-list">
				            	{
									this.state.data.attachment === 0? this.state.data.attachment.map((item, index) => {
										return (<List.Item key={index}>{item.name}</List.Item>)
									}) : ""
				           		}
				            </List>
				        </Accordion.Panel>
				    </Accordion>

					<WhiteSpace size="lg" />
				    <List.Item>
						<Flex direction="row" justify="start">
							<Flex.Item><span className="title">审核步骤：</span></Flex.Item>
							<Flex.Item style={{flexShrink: 1}}>
								<span className="approvalshow"> {this.state.radio.name ? this.state.radio.name : '请选择审批意见'}</span>
							</Flex.Item>
							<Flex.Item>
								<Button className="btn" type="primary" inline size="large" onClick={this.showModal('modal')}>选择步骤</Button>
							</Flex.Item>
						</Flex>
					</List.Item>

					 <Modal
			          title="请选择审核步骤"
			          transparent
			          maskClosable={false}
			          visible={this.state.modal}
			          onClose={this.onClose('modal')}
			          footer={[{ text: '确定', onPress: () => { this.onClose('modal')(); } }]}
			        >
				        <List>
				        	{this.state.reviewsteps.map((item, index) => {
								return (
									<RadioItem key={index} checked={this.state.radio.value === item.value} onChange={() => this.onChange(item.value, item.name)}>
										{item.name}
					        		</RadioItem>
					        	);
				        	})}
					    </List>
			        </Modal>
				</div>
			);
		}

		return message;
	}
}

export default CardList;