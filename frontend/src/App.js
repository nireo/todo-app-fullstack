import React, { useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { User } from './components/User/User';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user === null ? <User setUser={setUser} /> : <Main setUser={setUser} />}
    </div>
  );
};

export default App;
