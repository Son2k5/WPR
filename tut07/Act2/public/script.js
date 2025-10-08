'use strict'

async function handleLogin(e) {
    e.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const resultValue = document.querySelector("#result");

    resultValue.textContent = "Processing...";
    resultValue.style.color = "black";

    try {
        const response = await fetch('/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const text = await response.text();
        resultValue.textContent = text;
        resultValue.style.color = text.includes("successful") ? "green" : "red";

    } catch (e) {
        resultValue.textContent = "Error connecting to server";
        resultValue.style.color = 'red';
    }
}

document.querySelector(".loginForm").addEventListener("submit", handleLogin);
