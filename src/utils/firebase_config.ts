export const dummy = 5;

// ject configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyB-M2kI-7eYeT7yuWdMyh3pMABs0MUUGSk',
//   authDomain: 'smartmirror-app.firebaseapp.com',
//   databaseURL: 'https://smartmirror-app.firebaseio.com',
//   projectId: 'smartmirror-app',
//   storageBucket: 'smartmirror-app.appspot.com',
//   messagingSenderId: '321642693367',
//   appId: '1:321642693367:web:fa890eb5b9afe787',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Create instance of Google provider object
// const provider = new firebase.auth.GoogleAuthProvider();
// // Add Google Calendar scope for widget integration
// provider.addScope('https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly');
// // Localize oauth flow to user preferred language
// firebase.auth().languageCode = 'pt';

// // Actual sign in
// firebase.auth().signInWithRedirect(provider);
// firebase.auth().getRedirectResult().then(function(result) {
//   console.log(result)
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const token = result.credential.accessToken;
//     console.log(token)
//     // ...
//   }
//   // The signed-in user info.
//   const user = result.user;
//   console.log(user)
// }).catch(function(error) {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log(errorCode, errorMessage)
//   // The email of the user's account used.
//   const email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   const credential = error.credential;
//   // ...
// });
