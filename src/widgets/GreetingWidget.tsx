import React from 'react';
import { Typography } from '@material-ui/core';

// Utils
import { isUser } from '../utils/utils';
import { LoginProps } from '../utils/types';

const GreetingWidget: React.FC<LoginProps> = ({ user, setUser }) => {
  return (
    <>
      {isUser(user) ? (
        <>
          <Typography component="h2" variant="h4">
            Hi, {user.displayName}
          </Typography>
        </>
      ) : (
        <></>
      )}{' '}
    </>
  );
};

export default GreetingWidget;
