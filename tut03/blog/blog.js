/**
 * JS for blog post section exercise
 */
"use strict";


(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * adds a blog entry to the blog post page
   */
  function addEntry() {
    const date = document.querySelector("#date").value.trim();
    const text = document.querySelector("#entry").value.trim();

    if(date === "" || text === ""){
      alert("Fill the blank");
      return;
    }

    let article = document.createElement("article");
    article.classList.add("post");

    let h3 = document.createElement("h3");
    h3.textContent = date;
    article.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = text;
    article.appendChild(p);

    document.getElementById("posts").appendChild(article);

    document.getElementById("date").value ="";
    document.getElementById("entry").value ="";

    article.addEventListener("dblclick",() =>{
      article.remove();
      if(qsa(".post").length < 3){
        qs("button").disabled = false;
      }
    });
    if(qsa(".post").length>=3){
      qs("button").disabled = true;
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
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
   * Returns array of elements matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object[]} - array of DOM objects associated selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
  
  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} a DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
