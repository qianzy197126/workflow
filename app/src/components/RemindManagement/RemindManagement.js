import React, {
    Component
} from 'react'
import {
    Flex,
    List,
    WhiteSpace,
    Checkbox,
    Button
} from 'antd-mobile'

import './RemindManagement.less'

const CheckboxItem = Checkbox.CheckboxItem


class RemindManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: [false, false, false]
        };
    }

    oncheckboxChange = (val) => {
        this.state.checkbox[val] = this.state.checkbox[val] ? false : true;
    }

    obj2params(obj) {
        var result = '';
        var item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }

        if (result) {
            result = result.slice(1);
        }

        return result;
    }

    ensure() {
        // if (this.props.data.step) {
        //     alert("请选择审核步骤");
        //     return;
        // } else if (this.props.comments) {
        //     alert("请选择审核意见");
        //     return;
        // }
        let obj = {
            taskId: this.props.data.TASKID,
            runId: this.props.data.RUNID,
            defId: this.props.data.DEFID,
            activityName: this.props.data.ACTIVITYNAME,
            ccUserIds: this.props.data.CC_TO,
            sendMail: this.state.checkbox[0],
            sendMsg: this.state.checkbox[1],
            sendInfo: this.state.checkbox[2],
            comments: this.props.comments.label,
            userId: this.props.data.USERID,
            flowAssignId: "",
            piId: this.props.data.PIID,
            taskName: this.props.data.TASKNAME,
            destName: this.props.data.step.name,
            signalName: "",
            signUserIds: ""
        };
        if (this.props.isback) {
            obj = Object.assign(obj, {
                status: "退回",
                isBack: true,
            });
        } else {
            obj = Object.assign(obj, {
                status: "",
                isBack: false,
            });
        }

        let bodyimformation = this.obj2params(obj);
        if (this.props.stepscount !== 1) {
            bodyimformation += "&" + this.props.data.step.code + "=" + this.props.data.step.value
        }
        let result = fetch('http://222.198.39.3:8080/gljoa/api/doTask.do', {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: bodyimformation
        });

        result.then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).then((json) => {
            console.log(json);
        });
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
                        if(this.props.isback){
                            return (<CheckboxItem key={index} disabled onChange={() => this.oncheckboxChange(item.value)}>
                                <span>{item.label}</span>
                            </CheckboxItem>)
                        }else{
                             return (<CheckboxItem key={index} onChange={() => this.oncheckboxChange(item.value)}>
                                <span>{item.label}</span>
                            </CheckboxItem>)
                        }
                    })}
                </List>
            </Flex>

            <WhiteSpace size="lg" />
            <Flex justify="start">
                <Flex.Item style={{
                    flex: 1
                }}>
                </Flex.Item>
                <Flex.Item style={{
                    flex : 4
                }}>
                    <Button type="primary" onClick={this.ensure.bind(this)}>确认</Button>
                </Flex.Item>
                <Flex.Item style={{
                    flex: 1
                }}> 
                </Flex.Item>
                <Flex.Item style={{
                    flex : 4
                }}>
                    <Button type="ghost">返回</Button>
                </Flex.Item>
                <Flex.Item style={{
                    flex: 1
                }}></Flex.Item>
            </Flex>
        </div>)
    }
}

export default RemindManagement