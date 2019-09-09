import React from 'react';
import { Box } from '@material-ui/core';

import Widget from '../widgets/Widget';
import TimeWidget from '../widgets/TimeWidget';
import GreetingWidget from '../widgets/GreetingWidget';
import AudioWidget from '../widgets/AudioWidget';

// Utils
import { LoginProps } from '../utils/types';

const Index: React.FC<LoginProps> = ({ user, setUser }) => {
  return (
    <Box p={2} style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Widget
        widget={<GreetingWidget user={user} setUser={setUser} />}
        x_pos={0}
        y_pos={0}
      />
      <Widget widget={<TimeWidget />} x_pos={40} y_pos={1} />
      {/* <Widget widget={<AudioWidget />} x_pos={25} y_pos={15} /> */}
    </Box>
  );
};

export default Index;
