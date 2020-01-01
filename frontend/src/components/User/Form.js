import React from 'react';

export const Form = ({
  username,
  password,
  remember,
  onSubmit,
  setUsername,
  setPassword,
  setRemember,
  title
}) => {
  return (
    <div
      className="text-center"
      style={{ marginTop: '5rem', paddingRight: '2rem', paddingLeft: '2rem' }}
    >
      <form className="form-signin" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">{title}</h1>
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
              style={{ marginTop: '1rem' }}
            />{' '}
            Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
