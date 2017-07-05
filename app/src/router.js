import React from 'react'
import {
  hashHistory,
  Route,
  Router
} from 'react-router'
import App from './components/app'
import AppComponent from './components/app'
import MyButton from './components/Button'
import MyNavbar from './components/MyNavbar/MyNavbar'
import MyStep from './components/MyStep/MyStep'
import StaffModal from './components/StaffModal/StaffModal'


const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
    </Route>
      {/*<IndexRoute component={}/>*/}
      {/*<Route path="myButton" component={MyButton}></Route>
    </Route>
    <Route path="/navbar" component={MyNavbar}></Route>
    <Route path="/navbar2" component={MyNavbar}> </Route>*/}
    <Route path="/" component={App}></Route>
    {/*<Route path="/" component={StaffModal}></Route>*/}
  </Router>
)

export default RouterApp