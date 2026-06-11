/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    const btn = document.getElementById("demo-btn");
    btn.addEventListener("click", activeMethod);
  }
  function activeMethod(){
    const img = document.getElementById("pokeball");
    img.src = "mystery.gif"
  }

})();