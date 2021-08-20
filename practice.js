
var firebaseConfig = {
    apiKey: "AIzaSyBCtvhhVGqyAfvfnJ1B6B-xkW1McS8tutw",
    authDomain: "kwitter-60a24.firebaseapp.com",
    databaseURL: "https://kwitter-60a24-default-rtdb.firebaseio.com",
    projectId: "kwitter-60a24",
    storageBucket: "kwitter-60a24.appspot.com",
    messagingSenderId: "1081076619934",
    appId: "1:1081076619934:web:f2520f9cafc8b19ddb398f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() { user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({ purpose : "adding user" }); }