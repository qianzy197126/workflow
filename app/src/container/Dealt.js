import React from "react";
import MyNeedDealt from "../components/MyNeedDealt/MyNeedDealt.js";
import Header from "../components/Header/index.js";

import dealtData from './Dealt.json';
import testData from './Test.json';

let pageSize = 4;//一次取出的数据条数
let type = 0;
export default class Dealt extends React.Component{
	
	constructor(props) {
        super(props);
        this.state ={
        	data:[],
        	pageIndex:1
        };  
    }

    _fresh(e){
        console.log(this.state.pageIndex);
        this.setState({
            data: testData,
            pageIndex:this.state.pageIndex++,
          });
        console.log(this.state.pageIndex);
    }

    componentDidMount(){
  //   	let _this = this;
  //   	fetch('http://222.198.39.25:8181/MOA/getWaitingMatter.do?pageSize=4&pageIndex='+this.state.pageIndex + '&type='+type, {
		//   // method: 'POST',
		//   // headers: {
		//   //   'Content-Type': 'application/json',
		//   // },
		//   // body: 'type=0&pageSize=4&pageIndex=1'
		// }).then(function (res) {
  //           console.log("fetch request ", JSON.stringify(res.ok));
  //           if(res.ok){
  //               res.json().then(function (json) {
  //               	console.log(res.ok);	
  //                   console.log(json);
  //                   let data = JSON.parse(json);
  //                   console.log(data);
  //                   _this.setState({
  //                   	data: data
  //                   });
                    

  //               });
  //           }else{
  //           	console.log(res.ok);
  //               console.log("请求失败")
  //           }

  //       }).catch(function (e) {
  //           console.log("fetch fail");
  //       });

        this.setState({
            data:dealtData
        });
        
        
    }

	render(){
			let title;
			if(type==0)
				title = "待办事项";
			else
				title = "在办事项";
			return (
			<div>
				<Header title={title}/>
				{
					this.state.data.map((item,index)=>{
						// return <MyNeedDealt key={index} data={item}  title={title} count={index+1+(this.state.pageIndex-1)*pageSize}/>
                        return <MyNeedDealt key={index} data={item}  title={title} count={index+1+(this.state.pageIndex-1)*pageSize} />
					})
				}

                <button onClick={this._fresh.bind(this)}>点击刷新页面</button>

				
			</div>
			)
	}
}