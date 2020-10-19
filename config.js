var firebaseConfig = {
    apiKey: "AIzaSyCzhh3dOaTJG3-7QzekSWqLM1KZBPHoDt4",
    authDomain: "story-448ed.firebaseapp.com",
    databaseURL: "https://story-448ed.firebaseio.com",
    projectId: "story-448ed",
    storageBucket: "story-448ed.appspot.com",
    messagingSenderId: "210597858799",
    appId: "1:210597858799:web:b9b41f9fd32d5d565a7a1a",
    measurementId: "G-5W379FPLV7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()