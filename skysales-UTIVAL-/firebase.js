import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCybmXAUWgGDCMNQWvcRdaMgE31I1GkF8M",
  authDomain: "log-in-authentication-ac1b6.firebaseapp.com",
  projectId: "log-in-authentication-ac1b6",
  storageBucket: "log-in-authentication-ac1b6.appspot.com",
  messagingSenderId: "735126972855",
  appId: "1:735126972855:web:b26c16bd1de14bf361e032",
  measurementId: "G-3GKSESXV7S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const name = document.querySelector(".name");
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");



const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  signupPassword = signupPasswordIn.value;
  if(signupPassword.length != 6) {
      window.alert("Password length must be 6. Try again.")
      isVerified = false;
  }

  fullName = name.value;
  if(fullName == null) {
      window.alert("Password length must be 6. Try again.")
      isVerified = false;
  }
  
  if(signupEmail == null || signupPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword, name)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Success! Account created.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
    });
  }
});

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);

  password = passwordInput.value;
  console.log(password);

  fullName = name.value;
  console.log(fullName);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
      window.location = "shopNow.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
    main.style.display = "block";
    createacct.style.display = "none";
});
