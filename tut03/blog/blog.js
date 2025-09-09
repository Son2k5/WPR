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
    let date = id("date").value.trim();
    let text = id("entry").value.trim();

    if (date === "" || text === "") {
      alert("Please enter both a date and your thoughts!");
      return;
    }

    let article = gen("article");
    article.classList.add("post");

    let h3 = gen("h3");
    h3.textContent = "Date: " + date;
    article.appendChild(h3);

    let p = gen("p");
    p.textContent = "Entry: " + text;
    article.appendChild(p);

    id("posts").appendChild(article);

    id("date").value = "";
    id("entry").value = "";

    article.addEventListener("dblclick", function() {
      article.remove();
      if (qsa(".post").length < 3) {
        qs("button").disabled = false;
      }
    });

    if (qsa(".post").length >= 3) {
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
