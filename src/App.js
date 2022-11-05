import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './containers/login/Login'
import Home from './containers/home/Home'
import Statistic from './containers/statistic/Statistic'
import Reports from './containers/reports/Reports'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/statistic" component={Statistic} />
        <Route exact path="/reports" component={Reports} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
