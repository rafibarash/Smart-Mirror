import React from 'react';
import { Typography } from '@material-ui/core';

// Utils
import { isUser } from '../utils/utils';
import { LoginProps } from '../utils/types';

const Index: React.FC<LoginProps> = ({ user, setUser }) => {
  return (
    <div>
      {isUser(user) ? (
        <>
          <Typography variant="h4">Hi, {user.displayName}</Typography>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;
