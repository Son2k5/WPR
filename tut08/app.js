const express = require('express')
const fs = require("fs");
const cookieParse = require("cookie-parser");
const {EncryptText, DecryptText} = require("./cryptoModule");
const app = express();
const path = require("path");
const { json } = require('stream/consumers');
const { error } = require('console');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,"views"))

app.use(express.urlencoded({extended: true}));
app.use(cookieParse());

app.get("/login", (req, res)=>{
    res.render("login", {error: null});
})
const SECRET_KEY = '1234567890abcdef';
app.post("/login", (req, res) =>{
    const{username, password} = req.body;
    const users= JSON.parse(fs.readFileSync('./user.json'));
    const checkUser = users.find(e => e.username === username)
    if(!checkUser){
        return res.render("login", {error: "Invalid user"})
    }
    if(checkUser.password != password){
        return res.render('login', { error: 'Incorrect password' });
    }
    res.cookie("user", checkUser.id,{httpOnly:true, maxAge: 3600000})
    res.redirect('profile')
})

//==== Middleware\
app.use((req, res, next) =>{
    if(req.cookies){
        for(const key in req.cookies){
            try{
                req.cookies[key] == DecryptText(req.cookies[key], SECRET_KEY)
            }catch{

            }
        }
    }
    next()
})
