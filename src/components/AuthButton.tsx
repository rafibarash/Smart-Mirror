import React from 'react';
import { Button } from '@material-ui/core';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Utils
import { isUser } from '../utils/utils';
import { LoginProps } from '../utils/types';

// AuthButton
const AuthButton: React.FC<LoginProps> = ({ user, setUser }) => {
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        setUser({});
        console.log('successful logout');
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  const login = () => {
    // Create instance of Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Add Google Calendar scope for widget integration
    // provider.addScope(
    //   'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'
    // );

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        if (result.credential) {
          // const token = result.credential.accessToken;
          // console.log(token);
        }
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div>
      {isUser(user) ? (
        <>
          <Button variant="contained" onClick={logout}>
            Log out
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={login}>
            Register/Log in
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthButton;
