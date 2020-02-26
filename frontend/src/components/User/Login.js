import React, { useState } from 'react';
import { Form } from './Form';
import userService from '../../services/user';
import itemService from '../../services/item';
import { Link } from 'react-router-dom';

export const Login = ({ setUser, setShowRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const login = async event => {
    event.preventDefault();

    const credentials = { username, password };
    const user = await userService.login(credentials);

    setUser(user.user);
    itemService.setToken(user.token);

    if (remember) {
      window.localStorage.setItem('todo-user', JSON.stringify(user));
    }
  };

  return (
    <div className="container">
      <Link to="/demo">Or go to demo</Link>
      <Form
        title="Login"
        username={username}
        remember={remember}
        password={password}
        setRemember={setRemember}
        setPassword={setPassword}
        setUsername={setUsername}
        onSubmit={login}
      />
      <div className="text-center" style={{ marginTop: '1rem' }}>
        <button onClick={() => setShowRegister(true)} className="link">
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
};
