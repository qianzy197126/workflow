import React from "react";
import MyNeedDealt from "../components/MyNeedDealt/MyNeedDealt.js";
import Header from "../components/Header/index.js";
import MyNavbar from "../components/MyNavbar/MyNavbar"
import dealtData from './Dealt.json';

export default class Dealt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageIndex: 1,
            pageSize: 10,
            type: 0 //0: 代办 1： 在办
        };
    }

    componentDidMount() {
        let result = fetch(
            'http://222.198.39.25:8080/MOA/getWaitingMatter.do?pageSize=' + this.state.pageSize + '&pageIndex=' + this.state.pageIndex + '&type=' + this.state.type);

        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                data: JSON.parse(json)
            });
        }).catch((e) => {
            console.log("fetch fail");
        });
    }

    render() {
        let title;
        if (this.state.type === 0)
            title = "待办事项";
        else
            title = "在办事项";
        return (
            <div>
				<MyNavbar navName="代办事项"/>
				{
					this.state.data.map((item,index)=>{
						return <MyNeedDealt key={index} data={item}  title={title} count={index+1+(this.state.pageIndex-1)*pageSize}/>
					})
				}
                <div className="loadmoreing">正在加载</div>
			</div>
        )
    }
}