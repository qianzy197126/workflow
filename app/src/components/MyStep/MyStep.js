import React, { Component } from 'react'
import './MyStep.less'

import { Steps, WingBlank, WhiteSpace, Icon } from 'antd-mobile'

import json from './Mock.json' 

const Step = Steps.Step;
const waitSvg = <Icon type={require('../../images/step/ellipsis-circle.svg')}/>
const finishSvg = <Icon type={require('../../images/step/finish.svg')} />

class MyStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waitData: {},
            data: []
        }
    }



    rendItem(){
        
        let count = 0;
        let insertWait;
        if(this.state.waitData) {
            insertWait = [<Step key={count++} status="error" title={this.state.waitData.tackName} icon={waitSvg} 
                                description={"未确认 " + this.state.waitData.creator}/>];
        }else {
            insertWait = [<Step key={count++} status="error" icon={waitSvg}/>];
        }


        
        let insertFinish = this.state.data.map((item) => {
            return <Step key={count++} status="finish" title={item.ACTIVITYNAME} icon={finishSvg} 
                description={item.CREATETIME + " " + item.CREATORNAME}/>;
        });

        // let insert = insertWait.push.apply(insertWait, insertFinish);
        // console.log(insert);

        let insert = insertWait.concat(insertFinish);
        return insert;
        
    }

    componentDidMount() {
        this.fetchData('8976290');
    }

    fetchData(runID) {
        fetch('http://222.198.39.25:8080/MOA/getWaitingMatterInfoByID.do?runID=8976290', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            data = JSON.parse(data);
            let waitData = {
                creator: data.CREATOR,
                tackName: data.TASKNAME,
                reviewUserName: data.REVIEW_USER_NAME
            };
            

            let id = runID ? runID : '';
            fetch('http://222.198.39.25:8080/MOA/getProcess.do?runID=' + runID, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(this);
                this.setState({
                    waitData: waitData,
                    data: JSON.parse(data)
                });
            }).catch((err) => {
                console.log(err);
            });
        })

        
    }

    render() {
        return (
            <WingBlank size="lg">
                <div className="sub-title">流程审批信息：</div>
                <WhiteSpace />
                <WingBlank size="lg">
                    <Steps size="small">
                        {this.rendItem()}
                        {/*<Step status="process" title="收文登记 叶太霞" /> 
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请谭局阅示" /> 
                        <Step status="finish" title="领导批示 谭立云 已阅，请信息处阅办" />
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请阅处" />  
                        <Step status="finish" title="处室拟办 王庆珍 请吴工牵头办理" /> 
                        <Step status="finish" title="处室副拟办 吴川 同意" /> */}
                        {/*<Step status="process" title="收文登记 叶太霞"/> 
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请谭局阅示"/> 
                        <Step status="finish" title="领导批示 谭立云 已阅，请信息处阅办" />
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请阅处" />  
                        <Step status="finish" title="处室拟办 王庆珍 请吴工牵头办理" /> 
                        <Step status="finish" title="处室副拟办 吴川 同意" /> */}
                        
                        {/*<Step status="error" title="收文登记 叶太霞" icon={<Icon type={require('../../images/step/ellipsis-circle.svg')} />}/> 
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请谭局阅示" icon={<Icon type={require('../../images/step/finish.svg')} />}/> 
                        <Step status="finish" title="领导批示 谭立云 已阅，请信息处阅办" icon={<Icon type={require('../../images/step/finish.svg')} />}/>
                        <Step status="finish" title="办公室主任拟办 钟飞龙 请阅处" icon={<Icon type={require('../../images/step/finish.svg')} />}/>  
                        <Step status="finish" title="处室拟办 王庆珍 请吴工牵头办理" icon={<Icon type={require('../../images/step/finish.svg')} />}/> 
                        <Step status="finish" title="处室副拟办 吴川 同意" icon={<Icon type={require('../../images/step/finish.svg')} />}/> */}
                    </Steps>
                </WingBlank>
            </WingBlank>
        )
    }
}

export default MyStep