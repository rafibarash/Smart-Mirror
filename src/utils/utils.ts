// Firebase project configuration
export const firebaseConfig: any = {
  apiKey: 'AIzaSyB-M2kI-7eYeT7yuWdMyh3pMABs0MUUGSk',
  authDomain: 'smartmirror-app.firebaseapp.com',
  databaseURL: 'https://smartmirror-app.firebaseio.com',
  projectId: 'smartmirror-app',
  storageBucket: 'smartmirror-app.appspot.com',
  messagingSenderId: '321642693367',
  appId: '1:321642693367:web:fa890eb5b9afe787',
};

// Check if user logged in
export const isUser = (user: any): boolean => {
  for (let key in user) {
    if (user.hasOwnProperty(key)) return true;
  }
  return false;
};
