import React, { useState } from 'react';
import { Form } from './Form';
import userService from '../../services/user';
import axios from 'axios';

export const Register = ({ setUser, setShowRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const register = async event => {
    event.preventDefault();
    console.log('here');

    const credentials = { username, password };
    const user = await userService.register(credentials);

    setUser(user);
    if (!remember) {
      return;
    }

    window.localStorage.setItem('user', JSON.stringify(user));
    return;
  };

  return (
    <div className="container">
      <Form
        title="Register"
        username={username}
        remember={remember}
        password={password}
        setRemember={setRemember}
        setPassword={setPassword}
        setUsername={setUsername}
        onSubmit={register}
      />
      <div className="text-center" style={{ marginTop: '1rem' }}>
        <button onClick={() => setShowRegister(false)} className="link">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};
