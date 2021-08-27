import React from 'react'
import { Router, Switch, Route,Redirect } from 'react-router-dom';
import Login from './Component/Login/login';
import MainPage from './main';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={MainPage} />
            {/* <Route exact path="/">
              {token ? <Redirect push to="/main" /> : <Login exact />}
            </Route> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App