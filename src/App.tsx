import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Utils
import { firebaseConfig } from './utils/utils';

// Components
import Navbar from './components/Navbar';

// Import views
import Index from './views/Index';
import NoMatch from './views/NoMatch';
import { Container, Box } from '@material-ui/core';

// Main App
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
      }
    });
  });

  return (
    <Router>
      <Container maxWidth="md">
        <Box my={4}>
          <Navbar user={user} setUser={setUser} />
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
