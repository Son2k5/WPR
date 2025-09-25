/**
 * A webpage for fetching cute pet photos.
 * Photos will be populated on the page after the user
 * selects their desired pet type.
 */
"use strict";
(function() {

  const url = "http://103.159.50.237/wpr/api/pets/index.php";
  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // TODO
    let RadioValue = qsa("input[name = 'animal']");
    RadioValue.forEach(radio =>{
      radio.addEventListener("change", makeRequest);
    });
  }

  /**
   * TODO: Fetch data from the ajax pets API!
   */
  async function makeRequest() {
    // TODO
    try{
      let animal = qs("input[name='animal']:checked").value;
      let FullUrl = url + "?animal=" + animal;

      let result = await fetch(FullUrl);
      await statusCheck(result);

      let text = await result.text();
      let lines = text.trim().split("\n");

      RenderImages(lines);
      
    }catch(e){
      console.error("Error fetching pets:" + e);
      id("pictures").textContent = "Can not upload image ";
    }
  }

  /**
   * TODO: Implement any other functions you need
   */
  function RenderImages(urls){
    let imgContainer = id("pictures");
    imgContainer.innerHTML = "";

    urls.forEach( link =>{
      let img = document.createElement("img");
      img.src = link.trim();
      img.alt = "Pet";
      imgContainer.appendChild(img);
    });

    
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
