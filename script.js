"use strict";
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
}

function isValidName(name) {
  return name.lenght < 0;
}

function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

console.log("test");
