import React, { Component } from 'react'
import './MyNavbar.less'

import { NavBar, Icon } from 'antd-mobile'


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
                onLeftClick={()=>console.log('onleftclick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                    <Icon key="1" type="ellipsis" />
                ]}>
                {this.props.navName}
                {/*navbar*/}
            </NavBar>
        </div>
        )
    }
}

export default MyNavbar