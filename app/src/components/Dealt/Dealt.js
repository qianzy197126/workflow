import React from "react";
import MyNeedDealt from "../MyNeedDealt/MyNeedDealt.js";
import Header from "../Header/index.js";
import MyNavbar from "../MyNavbar/MyNavbar"
import dealtData from './Dealt.json';
import {
    PATH
} from '../../config/path'
import './Dealt.css';

export default class Dealt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pageIndex: 1,
            pageSize: 10,
            type: 0 //0: 代办 1： 在办
        };

        this.loadData.bind(this);
        this.loadmore.bind(this);
    }

    componentDidMount() {
        this.loadData();
        this.loadmore();
    }

    loadData() {

        let result = fetch(
            PATH + 'getWaitingMatter.do?pageSize=' + this.state.pageSize + '&pageIndex=' + this.state.pageIndex + '&type=' + this.state.type);

        result.then((res) => {
            return res.json();
        }).then((json) => {
            if (this.state.pageIndex === 1) {
                this.setState({
                    data: JSON.parse(json)
                });
            } else {
                this.setState({
                    data: this.state.data.concat(JSON.parse(json))
                });
            }
        });
    }

    loadmore() {
        let loadmore = this.refs.loadmore;
        let timeoutID;
        let index = this.state.pageIndex;
        let _this = this;

        function callback() {
            const top = loadmore.getBoundingClientRect().top;
            const windowHeight = window.screen.height;

            if (top && top / 3 < windowHeight) {
                _this.setState({
                    pageIndex: ++index
                });
                console.log(_this.state);
                _this.loadData();
            }
        }

        window.addEventListener('scroll', function() {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(callback, 50)
        }.bind(this), false);
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
                        return <MyNeedDealt key={index} data={item}  title={title} count={index+1+(this.state.pageIndex-1)*this.state.pageSize}/>
					})
				}
                <div className="loadmoreing" ref="loadmore">正在加载...</div>
			</div>
        )
    }
}