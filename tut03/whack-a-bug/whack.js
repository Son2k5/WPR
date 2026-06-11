/*
 * Whack a Bug Exercise
 * Handles whacking bugs.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for(let bug of bugs){
      bug.addEventListener("click", whackBug);
    }
  }

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */
 function whackBug() {
  let score = qs("#score");
  if(!this.classList.contains("whacked")){
    this.classList.add("whacked");
    this.src="bug-whacked.png";
    let current = parseInt(score.textContent);
    let total = current + 1;

    score.textContent = total;

    if(parseInt(score.textContent) == 24){
      qs("#game p").textContent = "All bugs have been whacked";
    }
  }
}


  /* --- HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();
