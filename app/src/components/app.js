import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router'
import MyNeedDealt from '../components/MyNeedDealt/MyNeedDealt.js'
import {
  NavBar,
  Icon
} from 'antd-mobile'
import {
  Card,
  WingBlank,
  WhiteSpace,
  Flex,
  List
} from 'antd-mobile';
import {
  PATH
} from '../config/path'
import MyNavbar from './MyNavbar/MyNavbar'
import CardList from './CardList/CardList'
import StaffModal from './StaffModal/StaffModal'
import Approval from './Approval/Approval'
import MyStep from './MyStep/MyStep'
import RemindManagement from './RemindManagement/RemindManagement'
import './app.less'

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isback: false,
      stepscount: -1,
      comments: {},
      countersign: true,
      userIDs: ""
    }
  }

  handle(obj) {
    this.setState({
      data: Object.assign(this.state.data, obj)
    });
  }

  setuserIDs(IDs) {
    this.setState({
      userIDs: IDs
    });
  }

  isback(isback) {
    this.setState({
      isback: isback
    });
  }

  setcomments(obj) {
    this.setState({
      comments: obj
    });
  }

  setstepscount(count) {
    this.setState({
      stepscount: count
    });
  }

  setcountersign(sign) {
    this.setState({
      countersign: sign
    });
  }

  render() {
    return (
      <div className="flex-container">
          <Flex>
            <Flex.Item><MyNavbar navName="处室副拟办"/></Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item><CardList handleFn={this.handle.bind(this)} isback={this.isback.bind(this)} setstepscount={this.setstepscount.bind(this)} setcountersign={this.setcountersign.bind(this)}/></Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              <List>
                <List.Item><StaffModal isback={this.state.isback} setuserIDs={this.setuserIDs.bind(this)} countersign={this.state.countersign} /></List.Item>
                <List.Item><Approval setcomments={this.setcomments.bind(this)} isback={this.state.isback}/></List.Item>
                <List.Item><RemindManagement {...this.state} /></List.Item>
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