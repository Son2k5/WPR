/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", solveEqua);
  }

  function solveEqua() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const resultValue = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultValue.textContent = "⚠️ Invalid input";
      return;
    }

    if (a === 0) {
      if (b === 0) {
        resultValue.textContent = (c === 0) 
          ? "Equation with infinite solutions"
          : "Unsolved equation";
      } else {
        resultValue.textContent = "Value is: " + (-c / b);
      }
      return;
    }

    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      resultValue.textContent = "Unsolved equation";
    } else if (delta === 0) {
      resultValue.textContent = `Double solution: x = ${-b / (2 * a)}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultValue.textContent = `Two solutions: x1 = ${x1}, x2 = ${x2}`;
    }
  }

})();
