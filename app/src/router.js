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
import Dealt from "./components/Dealt/Dealt";


const RouterApp = () => (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Dealt}/>
      <Route path='/path/:id' component={App}/>
      <Route path="/dealt" component={Dealt} />
      <Route path='/login' component={LoginComponent} />
    </Route>
  </Router>
)

export default RouterApp