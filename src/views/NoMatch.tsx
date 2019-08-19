import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch: React.FC = () => (
  <div>
    <h1>404 Page</h1>
    <Link to="/">I wanna go home</Link>
  </div>
);

export default NoMatch;
