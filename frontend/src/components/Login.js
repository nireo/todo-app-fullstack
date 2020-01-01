import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');

  return (
    <div className="text-center" style={{ marginTop: '5rem' }}>
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputUsername" className="sr-only">
          Email address
        </label>
        <input
          id="inputUsername"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <div className="checkbox mb-3">
          <label>
            <input
              type="checkbox"
              value={remember}
              onChange={({ target }) => setRemember(target.value)}
            />{' '}
            Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
    </div>
  );
};
