/**
 * JS for working with JSON exercise
 */

"use strict";

(function() {

  // Initialize event listeners when the page loads

  /**
   * Sets up event listeners for the page elements
   * - Adds a click event listener to the "loadDataButton"
   *   that triggers the loadData function
   */
    const loadDataBtn = document.getElementById("loadDataButton");
  function init() {
    const jsonData = {
      items: [
        { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
      ]
    };
    loadData(jsonData);
  }

  /**
   * Handles loading and displaying JSON data
   * - Defines a JSON object with sample data
   *    { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
   * - Shows a countdown timer before displaying the data
   * - Calls the displayData function to present the data after the countdown
   */
  function loadData(jsonData) {
    let countdown = 3;
    let container = id("dataContainer");
    container.textContent = `Loading data in ${countdown} seconds...`;

    let timer = setInterval( () =>{
      countdown--;
      if(countdown > 0){
        container.textContent = `Loading data in ${countdown} seconds...`;
      }
      else{
        clearInterval(timer);
        displayData(jsonData);
      }
    },1000)
    // Define the JSON object with sample data


    // Prepare to show countdown and data


    // Update countdown every second

  }

  /**
   * Displays the JSON data in the data container
   * - Clears any existing content in the container
   * - Iterates over each item in the JSON data and creates
   *   a new div element for each item with formatted text
   * - Appends each div to the container
   * @param {object} data - The JSON data to be displayed
   */
  function displayData(data) {
    let container = id("dataContainer");
    container.innerHTML ="";
    data.items.forEach(item=> {
      let div = gen("div");
      div.classList.add("data-item");
      div.textContent = `${item.name}, Age: ${item.age}, Country: ${item.country}`;
      container.appendChild(div);
    });
  }

  /**
   * Retrieves the DOM element with the specified ID
   * @param {string} id - The ID of the element to retrieve
   * @returns {object} - The DOM element with the specified ID
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Creates a new DOM element with the specified tag name
   * @param {string} tagName - The name of the tag for the new element
   * @returns {object} - The newly created DOM element
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
  loadDataBtn.addEventListener("click", init);
})();
