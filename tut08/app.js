const express = require('express')
const fs = require("fs");
const cookieParse = require("cookie-parser");
const {EncryptText, DecryptText} = require("./cryptoModule");
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname,"views"))

app.use(express.urlencoded({extended: true}));
app.use(cookieParse());

app.get("/login", (req, res)=>{
    res.render("login", {error: null});
})
const SECRET_KEY = '1234567890abcdef';

//==== Middleware=====
app.use((req, res, next) =>{
    if(req.cookies){
        for(const key in req.cookies){
            try{
                req.cookies[key] = DecryptText(req.cookies[key], SECRET_KEY)
            }catch{
                
            }
        }
    }
    next()
})
const originalCookies = app.response.cookie;

app.response.cookie = function(name, value, options) {
    const encryptedValue = EncryptText(String(value), SECRET_KEY);
    return originalCookies.call(this, name, encodeURIComponent(encryptedValue), options);
};


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

app.get("/profile", (req, res) =>{
    const userID = DecryptText(req.cookies.user, SECRET_KEY);
    if(!userID){
        return res.redirect("/login")
    }
    const users = JSON.parse(fs.readFileSync("./user.json"));
    const checkUser = users.find(e => e.id == userID)
    if(!checkUser){
        return res.redirect("/login")
    }
    return res.render('profile', {checkUser})
})
app.listen(3000, () =>{
    console.log(" listen in http://localhost:3000")
})