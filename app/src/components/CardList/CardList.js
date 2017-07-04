import React from 'react';
import {
	WhiteSpace,
	Accordion,
	List,
	Flex
} from 'antd-mobile';
import './cardList.less';
import json from './list.json';

class CardList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: json
		}
	}

	render() {
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
					<Flex>
						<div className="title">审核步骤：</div>
						<div className="content">{this.state.data.steps[0].name}</div>
					</Flex>
				</List.Item>
			</div>
		);
	}
}

export default CardList;