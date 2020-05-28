let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Owl of Barn"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/kingfisher-2046453__340.webp",
    "answer": "Kingfisher"
    }, 
 {
    "question": "Name this species of bird.",
    "image" : "images/owl-50267__340.webp",
    "answer": "Regular old Owl"
    }, 
{
    "question": "Name this species of bird.",
    "image" : "images/swan-2107052__340.webp",
    "answer": "Swanny River"
    }, 
    {
     "question": "What is the capital of PA?",
     "answer": "Harrisburg"
     }
     ];


function initializeFirebase() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC9eDzCtHrP4ZTwoB7puT0R2YA39lD-1mg",
    authDomain: "introduction-2-web-programming.firebaseapp.com",
    databaseURL: "https://introduction-2-web-programming.firebaseio.com",
    projectId: "introduction-2-web-programming",
    storageBucket: "introduction-2-web-programming.appspot.com",
    messagingSenderId: "1096908921815",
    appId: "1:1096908921815:web:06b956148d358dbd36c992",
    measurementId: "G-ZFPVE55QKH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

function writeStudentAnswers(name, email, answers) {
  firebase.database().ref('users/' + name).set({
    username: name,
    email: email,
    answers : answers
  });
    firebase.database().ref('deck/flashy').set(myFlashcards);
}

initializeFirebase();
writeStudentAnswers("michael","foo@bar.com", ["b","c","e","f"]);

let fc = firebase.database().ref('deck/flashy');
console.log('Output: ' + fc.toString() );
console.log('JSON: ' + fc.toJSON() );
