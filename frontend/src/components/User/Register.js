import React, { useState } from 'react';
import { Form } from './Form';
import userService from '../../services/user';

export const Register = ({ setUser, setShowRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async event => {
    event.preventDefault();

    const credentials = { username, password };
    const user = await userService.register(credentials);

    setUser(user);
  };

  return (
    <div className="container">
      <Form
        title="Register"
        username={username}
        password={password}
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
