import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';

import GithubState from './context/github/GithubState';
import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const App = () => {
 
  const [alert, setAlert] = useState(null);
  
  // Set Alert
  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg: msg, type: type } });
    setAlert({ msg, type });
    // setTimeout(() => this.setState({ alert: null }), 2000);
    setTimeout(() => setAlert(null), 2000);
  };

  // const { users, loading } = this.state;
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
