import React, {
    Component
} from 'react'

import img from "./activity.png";
import date_img from './date.png';
import person_img from './person.png';
import {
    Card,
    WingBlank,
    WhiteSpace
} from 'antd-mobile';
import {
    Link
} from 'react-router';
import "./MyNeedDealt.less";


class MyNeedDealt extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            data: this.props.data
        }

    }

    render() {
        let message;
        let id = this.props.data.RUNID;
        let path = "/mybutton?RUNID=" + id;
        if (!this.props.data) {
            return (
                <div><span>暂无数据。。。</span></div>
            )
        } else {
            return (
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <div className="cardHeader">
                          <Card.Header 
                            title={<span className="span_style">{this.props.title}{this.props.count}{this.props.data.count}</span>}
                            thumb={img}
                            extra={             
                                <Link to={`/path/${id}`}>
                                    <span className="span_style" >
                                        查看详情
                                    </span>
                                </Link>
                            }
                          />
                        </div>

                      <Card.Body>
                        <div>
                            <div className='left'>
                                <div className="up">
                                    <WhiteSpace size="lg" />
                                    <img src={date_img} alt="img" className="img_style"/>
                                    <span className="date_style">{this.props.data.CREATETIME}</span>
                                </div>

                                <div className="down"> 
                                    <WhiteSpace size="lg" />  
                                    <img src={person_img} alt="img" className="img_style"/>
                                    <span className="date_style">{this.props.data.CREATOR}</span>
                                </div>
                            </div>
                            <div className="right">
                                <WingBlank size="lg">
                                <WhiteSpace size="lg" />   
                                    {this.props.data.SUBJECT}   
                                <WhiteSpace size="lg" />
                                </WingBlank>
                            </div>
                        </div>
                        
                      </Card.Body>
                    </Card>

                    <WhiteSpace size="lg" />
                </WingBlank>
            )
        }

    }
}

export default MyNeedDealt