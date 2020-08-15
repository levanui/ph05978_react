import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCqssWvY-XpqAfp0wZTFXiyiwvnALJFZ7k",
    authDomain: "my-app-69809.firebaseapp.com",
    databaseURL: "https://my-app-69809.firebaseio.com",
    projectId: "my-app-69809",
    storageBucket: "my-app-69809.appspot.com",
    messagingSenderId: "404947728682",
    appId: "1:404947728682:web:df81de85b27639c7710653"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;