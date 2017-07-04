import React from 'react'
import {
	hashHistory,
	Route,
	Router
} from 'react-router'

import App from './components/app'

const RouterApp = () => (
	<Router history={hashHistory}>
    {/*<Route path="/" component={AppComponent}>*/}
      {/*<IndexRoute component={}/>*/}
      {/*<Route path="myButton" component={MyButton}></Route>
    </Route>
    <Route path="/navbar" component={MyNavbar}></Route>
    <Route path="/navbar2" component={MyNavbar}> </Route>*/}
    <Route path="/" component={App}></Route>

  </Router>
)

export default RouterApp