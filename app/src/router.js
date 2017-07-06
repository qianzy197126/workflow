import React from 'react'
import { hashHistory, Route, Router } from 'react-router'

import AppComponent from './components/app'
import MyButton from './components/Button'
import MyNavbar from './components/MyNavbar';
import Dealt from "./container/Dealt.js";



const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/dealt" component={Dealt}/>
    <Route path='/mybutton' component={MyButton}/>
    <Route path='/MyNavbar' component={MyNavbar}/>
    <Route path='/path/:id' component={MyNavbar}/>
  </Router>
)

export default RouterApp