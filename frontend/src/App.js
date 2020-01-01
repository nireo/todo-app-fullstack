import React, { useState } from 'react';
import './App.css';
import { Login } from './components/User/Login';
import { Main } from './components/Main';
import { User } from './components/User/User';

const App = () => {
  const [user, setUser] = useState(null);

  return <div>{user === null ? <User setUser={setUser} /> : <Main />}</div>;
};

export default App;
