import React, { Component } from 'react'
import { Link } from 'react-router'
import MyNeedDealt from '../components/MyNeedDealt/MyNeedDealt.js'
import { NavBar, Icon } from 'antd-mobile'
import { Card, WingBlank, WhiteSpace,Flex, List} from 'antd-mobile';

import MyNavbar from './MyNavbar/MyNavbar'
import CardList from './CardList/CardList'
import StaffModal from './StaffModal/StaffModal'
import Approval from './Approval/Approval'
import MyStep from './MyStep/MyStep'
import RemindManagement from './RemindManagement/RemindManagement'
import './app.less'

class AppComponent extends Component {

  render() {
    return (

      <div className="flex-container">

          <Flex>
            <Flex.Item><MyNavbar navName="处室副拟办"/></Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item><CardList /></Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            {/*<Flex.Item><StaffModal/></Flex.Item>*/}
            {/*<Flex.Item><Approval/></Flex.Item>*/}
            <Flex.Item>
              <List>
                <List.Item><StaffModal/></List.Item>
                <List.Item><Approval/></List.Item>
                <List.Item><RemindManagement/></List.Item>
                {/*<List.Item><Approval/></List.Item>*/}
              </List>
            </Flex.Item>
          </Flex>
          <WhiteSpace size="lg"/>
          <Flex direction="row" justify="start">
            <Flex.Item>
              <List>
                <List.Item><MyStep/></List.Item>  
              </List>
            </Flex.Item>
          </Flex>
      </div>
    )
  }
}

export default AppComponent