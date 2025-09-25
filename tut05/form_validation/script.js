"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    let form = id("registrationForm");
    form.addEventListener("submit", validateForm);

    // Real-time validation
    id("name").addEventListener("input", validateName);
    id("email").addEventListener("input", validateEmail);
    id("password").addEventListener("input", validatePassword);
    id("confirmPassword").addEventListener("input", validateConfirmPassword);
  }

  function validateForm(event) {
    event.preventDefault();

    let isValid =
      validateName() &
      validateEmail() &
      validatePassword() &
      validateConfirmPassword();

    if (isValid) {
      startCountdown();
    }
  }

  function startCountdown() {
    let countdown = id("countdown");
    countdown.style.display = "block";

    let counter = 3;
    countdown.textContent = "Success in " + counter + "...";

    let timer = setInterval(() => {
      counter--;
      if (counter > 0) {
        countdown.textContent = "Success in " + counter + "...";
      } else {
        clearInterval(timer);
        countdown.textContent = "✅ Success!";
      }
    }, 1000);
  }

  function validateName() {
    let name = id("name").value.trim();
    let error = id("nameError");
    if (name.length < 3) {
      error.textContent = "Name must be at least 3 characters.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  function validateEmail() {
    let email = id("email").value.trim();
    let error = id("emailError");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      error.textContent = "Invalid email address.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  function validatePassword() {
    let password = id("password").value;
    let error = id("passwordError");
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(password)) {
      error.textContent = "Password must be 8+ chars, include uppercase, lowercase, and a number.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  function validateConfirmPassword() {
    let password = id("password").value;
    let confirm = id("confirmPassword").value;
    let error = id("confirmPasswordError");
    if (confirm !== password || confirm === "") {
      error.textContent = "Passwords do not match.";
      return false;
    }
    error.textContent = "";
    return true;
  }

  function id(id) {
    return document.getElementById(id);
  }

})();
