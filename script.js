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
    displayError(
      "firstNameError",
      "First Name cannot be empty",
      "images/icon-error.svg"
    );
    addErrorBorders("firstName");
  } else {
    clearError("firstNameError");
    removeErrorBorders("firstName");
  }

  if (!isValidName(lastName)) {
    displayError(
      "lastNameError",
      "Last Name cannot be empty",
      "images/icon-error.svg"
    );
    addErrorBorders("lastName");
  } else {
    clearError("lastNameError");
    removeErrorBorders("lastName");
  }

  if (!isValidEmail(email)) {
    displayError("emailError", "Invalid email format", "images/icon-error.svg");
    addErrorBorders("email");
  } else {
    clearError("emailError");
    removeErrorBorders("email");
  }

  if (!isValidPassword(password)) {
    displayError(
      "passwordError",
      "Password must be at least 8 characters long",
      "images/icon-error.svg"
    );
    addErrorBorders("password");
  } else {
    clearError("passwordError");
    removeErrorBorders("password");
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

function displayError(id, message, image) {
  const errorElement = document.getElementById(id);
  const errorImage = document.getElementById(id.replace("Error", ""));
  errorElement.textContent = message;
  errorElement.style.display = "block";
  errorImage.style.backgroundImage = `url(${image})`;
}

function clearError(id) {
  const errorElement = document.getElementById(id);
  const errorImage = document.getElementById(id.replace("Error", ""));
  errorElement.textContent = "";
  errorElement.style.display = "none";
  errorImage.style.backgroundImage = "none";
}

function addErrorBorders(id) {
  const errorBorder = document.getElementById(id);
  errorBorder.style.border = ".2rem solid red"; // thin was the problem. changing to solid worked.
}

function removeErrorBorders(id) {
  const errorBorder = document.getElementById(id);
  errorBorder.style.border = "";
}

console.log("test");
