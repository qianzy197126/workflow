import React from 'react'
import {
  hashHistory,
  Route,
  Router,
  IndexRoute
} from 'react-router'
import App from './components/app'
import AppComponent from './components/app'
import MyButton from './components/Button'
import Dealt from "./container/Dealt.js";


const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Dealt}/>
      <Route path='/path/:id' component={App}/>
      <Route path="/dealt" component={Dealt} />
    </Route>
  </Router>
)

export default RouterApp