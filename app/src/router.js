import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import AppComponent from './components/app'
import MyButton from './components/Button'
import MyNavbar from './components/MyNavbar'

const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      {/*<IndexRoute component={}/>*/}
      <Route path="myButton" component={MyButton}></Route>
    </Route>
    <Route path="/navbar" component={MyNavbar}></Route>

  </Router>
)

export default RouterApp