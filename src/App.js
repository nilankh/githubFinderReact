import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const App = () => {
  
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  // this state can be written like this is functional component with the helps iof hooks so below state and above piece of code represenets same
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  // Search Github users(moved to githubstate.js file on 27lecture)
  // const searchUsers = async (text) => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data.items);
  //   setUsers(res.data.items);
  //   setLoading(false);
  //   // in hooks these below two lines can be wriiten as above two lines written or v bht jagahn smiliarity h
  //   // this.setState({
  //   //   users: res.data.items,
  //   //   loading: false,
  //   // });
  // };

  // // Get single Github user
  // const getUser = async (username) => {
  //   // this.setState({ loading: true });
  //   setLoading(true);
  //   // console.log(text)
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data.items);
  //   setUser(res.data);
  //   setLoading(false);
  //   // this.setState({
  //   //   user: res.data,
  //   //   loading: false,
  //   // });
  // };

  // Get users repos
  const getUserRepos = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);
    // console.log(text)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data.items);
    setRepos(res.data);
    setLoading(false);
    // this.setState({
    //   repos: res.data,
    //   loading: false,
    // });
  };

 

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
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    
                    getUserRepos={getUserRepos}
                    
                    repos={repos}
                    
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
