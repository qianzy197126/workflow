import React, { Component } from 'react'
import './MyNavbar.less'

import { NavBar, Icon } from 'antd-mobile'
import { hashHistory }from 'react-router' 


class MyNavbar extends Component {
    constructor(props) {
        super(props);
        // this.props.navName = '处室副拟办';
    }

    render() {
        return (
        <div>
            <NavBar leftContent="back"
                mode="light"
                onLeftClick={()=>{
                    hashHistory.go(-1);
                }}
                >
                {this.props.navName}
                {/*navbar*/}
            </NavBar>
        </div>
        )
    }
}

export default MyNavbar