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
import json from './list.json';

const RadioItem = Radio.RadioItem
class CardList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: json,
			modal: false,
			radio: {
				value: -1,
				label: ""
			},
			json: {}
		}
	}

	onChange = (value, label) => {
		this.setState({
			radio: {
				value: value,
				label: label
			}
		});
	};

	componentDidMount() {
		let result = fetch('http://222.198.39.25:8181/MOA/getWaitingMatterInfoByID.do?runID=8976290');
		result.then((res) => {
			return res.json();
		}).then((json) => {
			this.setState({
				json: JSON.parse(json)
			});
		});
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

	render() {
		console.log(this.state);
		return (
			<div className="cardlist">
				<List.Item>
					<Flex>
						<div className="title">拟稿部门：</div>
						<div className="content">{this.state.data.department}</div>
					</Flex>
				</List.Item>

				<List.Item>
					<Flex>
						<Flex.Item>
							<Flex>
								<div className="title">拟稿人：</div>
								<div className="content">{this.state.data.drafter}</div>
							</Flex>
						</Flex.Item>
						<Flex.Item>
							<Flex>
								<div className="title">核稿人：</div>
								<div className="content">{this.state.data.draftnuclear}</div>
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
								<div className="content">{this.state.data.mainsending}</div>
							</Flex>
						</Flex.Item>
						<Flex.Item>
							<Flex>
								<div className="title">抄送：</div>
								<div className="content">{this.state.data.copysending}</div>
							</Flex>
						</Flex.Item>
					</Flex>
				</List.Item>

				<List.Item>
					<Flex>
						<div className="title">发文单位：</div>
						<div className="content">{this.state.data.units.unitsdepartment}</div>
					</Flex>
				</List.Item>

				<List.Item>
					<Flex>
						<div className="title">公文正文：</div>
						<div className="content">{this.state.data.units.unitsfilename}</div>
					</Flex>
				</List.Item>

				<Accordion accordion openAnimation={{}} className="my-accordion">
			        <Accordion.Panel header={
							<Flex>
								<div className="title">公文附件：</div>
								<div className="content">便函554号.pdf</div>
							</Flex>
			        }>
			            <List className="my-list">
			            	{this.state.data.units.attachment.map((item,index) =>{
			            		return (<List.Item key={index}>{item.name}</List.Item>)
			           		})}
			            </List>
			        </Accordion.Panel>
			    </Accordion>

				<WhiteSpace size="lg" />
				<List.Item>
					<Flex direction="row" justify="start">
						<Flex.Item><span className="title">审核步骤：</span></Flex.Item>
						<Flex.Item style={{flexShrink: 1}}>
							<span className="approvalshow"> {this.state.radio.label ? this.state.radio.label : '请选择审批意见'}</span>
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
			        	{this.state.data.steps.map((item, index) => {
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
}

export default CardList;