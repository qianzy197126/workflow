import React from 'react'
import {
  hashHistory,
  Route,
  Router
} from 'react-router'
import App from './components/app'
import AppComponent from './components/app'
import MyButton from './components/Button'
import Dealt from "./container/Dealt.js";


const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path='/path/:id' component={App}/>
    <Route path="/dealt" component={Dealt} />
  </Router>
)

export default RouterApp