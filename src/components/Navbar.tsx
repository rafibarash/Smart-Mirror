import React from 'react';

// Utils
import { LoginProps } from '../utils/types';

// Components
import AuthButton from '../components/AuthButton';

// Navbar
const Navbar: React.FC<LoginProps> = ({ user, setUser }) => {
  return (
    <header style={{ textAlign: 'right' }}>
      <AuthButton user={user} setUser={setUser} />
    </header>
  );
};

export default Navbar;
