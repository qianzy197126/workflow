import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router'
import Approval from './Approval/Approval';
import CardList from './CardList/CardList';
import MyStep from './MyStep/MyStep';
import StaffModal from './StaffModal/StaffModal';
import MyNavBar from './MyNavBar';

import './app.less'
class AppComponent extends Component {
  render() {
    return (
      <div>
        <MyNavBar></MyNavBar>
        <CardList></CardList>
        <StaffModal></StaffModal>
        <Approval></Approval>
        <MyStep></MyStep>
      </div>
    )
  }
}

export default AppComponent