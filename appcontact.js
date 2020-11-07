// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDHOA6thHctaDx7GBlAGqbY-7S2bR-J3xs",
  authDomain: "test-form-36de1.firebaseapp.com",
  databaseURL: "https://test-form-36de1.firebaseio.com",
  projectId: "test-form-36de1",
  storageBucket: "test-form-36de1.appspot.com",
  messagingSenderId: "831938532224",
  appId: "1:831938532224:web:d573aad48cdd6cb1ad6765"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
