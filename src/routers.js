import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './pages/home'

let history = createBrowserHistory()

export default class AppRouter extends Component {
  render () {
    return (
      <Router history={history} >
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/test' exact component={Home} />
        </Switch>
      </Router>
    )
  }
}
