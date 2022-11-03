import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './containers/login/Login'
import Home from './containers/home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
