//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBqwhpdYVAPaGqKpxbxH0jXlzNlIe5QXAM",
    authDomain: "letschat-c2202.firebaseapp.com",
    databaseURL: "https://letschat-c2202-default-rtdb.firebaseio.com",
    projectId: "letschat-c2202",
    storageBucket: "letschat-c2202.appspot.com",
    messagingSenderId: "465020376426",
    appId: "1:465020376426:web:0526e70e9348c0af0f0113",
    measurementId: "G-XMK00QCQ06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

        name :user_name,
        message :msg,
        like :0

    })
    document.getElementById("msg").value=""
}