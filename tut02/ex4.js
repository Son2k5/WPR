/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    const para = document.querySelectorAll("p")
    para.forEach( p =>{
      p.textContent = p.textContent.toUpperCase()}
    );
  }

})();