
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMrxLtLTX_VtEWaY1XLEDM-xcDYcaEx9M",
    authDomain: "kwada-54890.firebaseapp.com",
    databaseURL: "https://kwada-54890.firebaseio.com",
    projectId: "kwada-54890",
    storageBucket: "kwada-54890.appspot.com",
    messagingSenderId: "897368877582",
    appId: "1:897368877582:web:5f25c5ef7bc7998263aa5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name-"+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>  ";
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

//adv-96-start

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}