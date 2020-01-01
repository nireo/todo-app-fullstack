import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';

export const User = ({ setUser }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {showRegister ? (
        <Register setUser={setUser} setShowRegister={setShowRegister} />
      ) : (
        <Login setUser={setUser} setShowRegister={setShowRegister} />
      )}
    </div>
  );
};
