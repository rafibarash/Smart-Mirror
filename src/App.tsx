import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Import views
import Index from './views/Index';
import NoMatch from './views/NoMatch';
import { Container, Box } from '@material-ui/core';

// Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-M2kI-7eYeT7yuWdMyh3pMABs0MUUGSk',
  authDomain: 'smartmirror-app.firebaseapp.com',
  databaseURL: 'https://smartmirror-app.firebaseio.com',
  projectId: 'smartmirror-app',
  storageBucket: 'smartmirror-app.appspot.com',
  messagingSenderId: '321642693367',
  appId: '1:321642693367:web:fa890eb5b9afe787',
};

const App: React.FC = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // No user is signed in.
        console.log('no user');
      }
    });
  });

  return (
    <Router>
      <Container maxWidth="md">
        <Box my={4}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Index {...props} user={user} setUser={setUser} />
              )}
            />

            <Route component={NoMatch} />
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
