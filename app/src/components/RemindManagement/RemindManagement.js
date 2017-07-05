import React, { Component } from 'react'
import {Flex, List, WhiteSpace,Checkbox, Button} from 'antd-mobile'

import './RemindManagement.less'

const CheckboxItem = Checkbox.CheckboxItem


class RemindManagement extends Component {


    constructor(props) {
        super(props);
        this.state = {
			checkbox: [0, 0, 0]
        }
    }

    oncheckboxChange = (val) => {
		this.state.checkbox[val] = this.state.checkbox[val] === 1 ? 0 : 1;
	}


    render() {
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

        return (<div>
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
        </div>)
    }
}

export default RemindManagement