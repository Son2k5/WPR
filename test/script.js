const express = require("express");
const app = express();

app.use(express.json());

app.get("/greet", (req, res) =>{
    const name = req.query.name || 'guest';
    res.send(`Welcome ${name}`) 

});

app.post("/square" ,(req, res) =>{
    const number = req.body.number;
    if(typeof number !== 'number'){
        return res.status(400).json({error :"Ivalid number"});
    }
    res.json({
        square: number * number 
    });
})

app.listen(4000);