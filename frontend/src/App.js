import React, { useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { User } from './components/User/User';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Demo } from './components/Demo/Demo';

const App = () => {
  const [user, setUser] = useState(null);

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
