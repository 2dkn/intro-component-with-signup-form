"use strict";
document.getElementById("submitButton").addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!isValidName(firstName)) {
    displayError("firstNameError", "First Name cannot be empty");
    addErrorBorders(firstName);
  } else {
    clearError("firstNameError");
  }

  if (!isValidName(lastName)) {
    displayError("lastNameError", "Last Name cannot be empty");
  } else {
    clearError("lastNameError");
  }

  if (!isValidEmail(email)) {
    displayError("emailError", "Invalid email format");
  } else {
    clearError("emailError");
  }

  if (!isValidPassword(password)) {
    displayError(
      "passwordError",
      "Password must be at least 8 characters long "
    );
  }
}

function isValidName(name) {
  return name.length > 0;
}

function isValidEmail(email) {
  const fakeEmail = /@#!@#@#$#$%$$%#$%$^^/;
  return fakeEmail.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

function addErrorBorders() {}

console.log("test");
