import React from 'react';
import { Box } from '@material-ui/core';

// utils
import { WidgetProps } from '../utils/types';

const Widget: React.FC<WidgetProps> = ({ x_pos, y_pos, widget }) => {
  const top = y_pos.toString() + '%';
  const left = x_pos.toString() + '%';
  // console.log(top, left);

  return <Box p={2}>{widget}</Box>;
};

export default Widget;
