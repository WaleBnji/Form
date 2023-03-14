"use strict";


// Selecting the elements
const userName = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const form = document.getElementById("form");
const button = document.getElementById("button");
const userNameError = document.getElementById("username-error");

const passWordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");

// Function to check valid email
function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//Make sure the sumit button does not work until certain conditions are met.

function checkInput() {
  userNameError.style.display = "block";
  emailError.style.display = "block";
  passWordError.style.display = "block";
  if (userName.value === "") {
    userNameError.textContent = "User Name cannot be empty";
  } else if (userName.value.trim().length < 4) {
    userNameError.textContent = "Username cannot be less than 4 characters";
  } else if (!userName.value.includes("_")) {
    userNameError.textContent = "Username must contain an underscore";
  } else {
    userNameError.textContent = "Username has been entered";
  }

  if (email.value === "") {
    emailError.textContent = "Email cannot be empty";
  } else if (!validEmail(email.value)) {
    emailError.textContent = "Email not valid";
  } else {
    emailError.textContent = "Email has been entered correctly";
  }

  if (passWord.value === "") {
    passWordError.textContent = "Password cannot be empty";
  } else if (passWord.value.length < 8) {
    passWordError.textContent = "Password length cannot be less than 8";
  } else {
    passWordError.textContent = "Password has been correctly entered";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput();
});
