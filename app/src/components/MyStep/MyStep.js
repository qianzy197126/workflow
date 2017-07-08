import React, {
    Component
} from 'react'
import './MyStep.less'

import {
    Steps,
    WingBlank,
    WhiteSpace,
    Icon
} from 'antd-mobile'
import {
    PATH
} from '../../config/path';
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



    rendItem() {

        let count = 0;
        let insertWait;
        if (this.state.waitData) {
            insertWait = [<Step key={count++} status="error" title={this.state.waitData.tackName} icon={waitSvg} 
                                description={"未确认 " + this.state.waitData.creator}/>];
        } else {
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
        fetch(PATH + 'getWaitingMatterInfoByID.do?runID=8976290 ', {
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
            fetch(PATH + 'getProcess.do?runID=' + runID, {
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
                    </Steps>
                </WingBlank>
            </WingBlank>
        )
    }
}

export default MyStep