import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './private-route';
import Login from './Component/Login/login';
import MainPage from './main';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
class App extends React.Component {
  state = {
    token: localStorage.getItem('token')
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/main" component={MainPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App