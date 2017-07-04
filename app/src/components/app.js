import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router'
import {
  Flex,
  WhiteSpace,
  List
} from 'antd-mobile'

import MyNavbar from './MyNavbar/MyNavbar'
import CardList from './CardList/CardList'
import StaffModal from './StaffModal/StaffModal'
import Approval from './Approval/Approval'
import MyStep from './MyStep/MyStep'
import './app.less'

class AppComponent extends Component {
  render() {
    return (

      // <div className="App">
      //   <div className="App-header">

      //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     <Link to="demo">
      //       欢迎使用!请查看代码，结合自己所学知识开始你的React之旅！
      //     </Link>
      //   </p>
      //   {this.props.children}
      // </div>

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