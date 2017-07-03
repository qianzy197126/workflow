import React from 'react';
import {
	WhiteSpace,
	Accordion,
	List
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
				<div className="cardcontent">
					<div className="carditem">
						<div className="title">拟稿部门：</div>
						<div className="content">{this.state.data.department}</div>
					</div>
					<div className="carditem">
						<div className="couple">
							<div className="title">拟稿人：</div>
							<div className="content">{this.state.data.drafter}</div>
						</div>
						<div className="couple">
							<div className="title">核稿人：</div>
							<div className="content">{this.state.data.draftnuclear}</div>
						</div>
					</div>
				</div>

				<WhiteSpace size="lg" />

				<div className="cardcontent">
					<div className="carditem">
						<div className="couple">
							<div className="title">主送：</div>
							<div className="content">{this.state.data.mainsending}</div>
						</div>
						<div className="couple">
							<div className="title">抄送：</div>
							<div className="content">{this.state.data.copysending}</div>
						</div>
					</div>
					<div className="carditem">
						<div className="title">发文单位：</div>
						<div className="content">{this.state.data.units.unitsdepartment}</div>
					</div>
					<div className="carditem">
						<div className="title">公文正文：</div>
						<div className="content">{this.state.data.units.unitsfilename}</div>
					</div>
					<Accordion accordion openAnimation={{}} className="my-accordion">
				        <Accordion.Panel header={
				        	<div className="intitle">
				        		<div className="title">公文附件：</div>
								<div className="content">便函544号.pdf</div>
				        	</div>
				        }>
				            <List className="my-list">
				            	{this.state.data.units.attachment.map((item,index) =>{
				            		return (<List.Item key={index}>{item.name}</List.Item>)
				           		})}
				            </List>
				        </Accordion.Panel>
				    </Accordion>
				</div>

				<WhiteSpace size="lg" />

				<div className="cardcontent">
					<div className="carditem">
						<div className="title">审核步骤：</div>
						<div className="content">{this.state.data.steps[0].name}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardList;