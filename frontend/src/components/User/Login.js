import React, { useState } from 'react';
import { Form } from './Form';
import userService from '../../services/user';
import itemService from '../../services/item';

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

    if (!remember) {
      return;
    }

    window.localStorage.setItem('user', JSON.stringify(user));
    return;
  };

  return (
    <div className="container">
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
