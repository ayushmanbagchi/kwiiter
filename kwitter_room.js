
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();