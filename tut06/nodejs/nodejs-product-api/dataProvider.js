const fs = require('fs');
const path = require('path');

// Path to the JSON file
const filePath = path.join(__dirname, 'products.json');

// Function to retrieve data from the JSON file
function getProducts() {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Export the function for students to use in their API
module.exports = { getProducts };
