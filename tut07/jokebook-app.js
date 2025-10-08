'use strict';

const express = require('express');
const app = express();

let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
  {
    'joke': 'Why did the student eat his homework?',
    'response': 'Because the teacher told him it was a piece of cake!'
  },
  {
    'joke': 'What kind of tree fits in your hand?',
    'response': 'A palm tree'
  },
  {
    'joke': 'Why don\'t scientists trust atoms?',
    'response': 'Because they make up everything'
  },
  {
    'joke': 'What did the left eye say to the right eye?',
    'response': 'Between you and me, something smells.'
  }
];
let lameJoke = [
  {
    'joke': 'Which bear is the most condescending?',
    'response': 'Pan-DUH'
  },
  {
    'joke': 'What would the Terminator be called in his retirement?',
    'response': 'The Exterminator'
  },
  {
    'joke': 'Why did it get so hot in the baseball stadium after the game?',
    'response': 'All of the fans left.'
  }
];
app.get("/jokebook/categories", (req, res) =>{
  let result = "";
  categories.forEach( e =>{
    result += `a possible category is ${e}\n`;
  })
  res.type("text/plain").send(result.trim());
})

app.get("/jokebook/joke/:category", (req, res) =>{
  const category = req.params.category;

  let jokeList;
  if(category === "funnyJoke"){
    jokeList = funnyJoke;
  }else if(category === "lameJoke"){
    jokeList = lameJoke;
  }else{
    return res.json({error: `no category listed for ${category}`});
  }

  const randomValue=  Math.floor(Math.random() * jokeList.length);
  res.json({
    category: category,
    joke: jokeList[randomValue]
  });
});
app.use(express.static('public'));
app.listen(8000, () => {
  console.log("Jokebook API running at http://localhost:8000");
});
