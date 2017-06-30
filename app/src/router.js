import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import AppComponent from './components/app'
import MyButton from './components/Button'

const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      {/*<IndexRoute component={}/>*/}
      <Route path="myButton" component={MyButton}></Route>
    </Route>

  </Router>
)

export default RouterApp