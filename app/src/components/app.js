/**
 * Created by out_xu on 17/3/16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

// import logo from '../images/logo.svg'
import MyNeedDealt from '../components/MyNeedDealt/MyNeedDealt.js'
import MyNavbar from './MyNavbar.js'

import { NavBar, Icon } from 'antd-mobile'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import './app.less'
class AppComponent extends Component {

  
  render () {
    return (
      <div className="App">
        <div className="App-header">
          
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to React</h2>
        </div>

        {this.props.children}
        
      </div>
    )
  }
}

export default AppComponent
