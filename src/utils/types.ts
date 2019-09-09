import React from 'react';

// Types for passing a user to a component
export interface LoginProps {
  user: any;
  setUser: any;
}

// Types for creating a widget
export interface WidgetProps {
  x_pos: number;
  y_pos: number;
  widget: any;
}
