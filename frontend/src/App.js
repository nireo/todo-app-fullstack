import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from './components/Main';
import { User } from './components/User/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Demo } from './components/Demo/Demo';
import itemService from './services/item';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      const userInfo = localStorage.getItem('todo-user');
      if (userInfo) {
        const userInfoJSON = JSON.parse(userInfo);
        itemService.setToken(userInfoJSON.token);
        setUser(userInfoJSON.user);
      }
    }
  }, [user]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            user === null ? (
              <User setUser={setUser} />
            ) : (
              <Main setUser={setUser} />
            )
          }
        />
        <Route exact path="/demo" render={() => <Demo setUser={setUser} />} />
      </Switch>
    </Router>
  );
};

export default App;
