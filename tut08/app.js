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

//==== Middleware FIXED =====
app.use((req, res, next) =>{
    if(req.cookies){
        for(const key in req.cookies){
            try{
                // Cookie-parser đã decode rồi, chỉ cần decrypt
                req.cookies[key] = DecryptText(req.cookies[key], SECRET_KEY);
            }catch(error){
                console.log(`Failed to decrypt cookie ${key}:`, error.message);
                res.clearCookie(key);
                delete req.cookies[key];
            }
        }
    }
    next()
})

const originalCookies = app.response.cookie;

// FIXED: Không cần encodeURIComponent vì cookie-parser tự xử lý
app.response.cookie = function(name, value, options) {
    const encryptedValue = EncryptText(String(value), SECRET_KEY);
    return originalCookies.call(this, name, encryptedValue, options);
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
    
    res.cookie("user", checkUser.id, {httpOnly:true, maxAge: 3600000})
    res.redirect('profile')
})

app.get("/profile", (req, res) =>{
    console.log("Cookies received:", req.cookies);
    
    const userID = req.cookies.user;
    
    if(!userID){
        console.log('Redirecting to login - no user cookie');
        return res.redirect("/login");
    }
    
    try {
        const users = JSON.parse(fs.readFileSync("./user.json"));
        const checkUser = users.find(e => e.id == userID); 
        
        if(!checkUser){
            console.log('User not found in database');
            return res.redirect("/login");
        }
        
        return res.render('profile', {checkUser});
    } catch(error) {
        console.log('Error:', error);
        return res.redirect("/login");
    }
});

app.listen(3000, () => {
    console.log("Listen on http://localhost:3000");
});