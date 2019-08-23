import React from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

interface LoginProps {
  user: any;
  setUser: any;
}

// Helper is object null function
function isUser(obj: any) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return true;
  }
  return false;
}

const Index: React.FC<LoginProps> = ({ user, setUser }) => {
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
      <h3>Hey there {user && user.displayName}</h3>
      {isUser(user) ? (
        <>
          <p>Ayyy u logged in</p>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <button onClick={login}>Register/Log in</button>
      )}
    </div>
  );
};

export default Index;
