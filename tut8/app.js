const express = require("express");
const exphbs = require("express-handlebars")
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path")
const fs = require("fs");
const { title } = require("process");
const { error } = require("console");

app.set("view engine","hbs");
app.set("views", path.join(__dirname, 'views'))

app.engine("hbs", exphbs.engine({
    extname: "hbs",
    defaultLayout:"main",
}))

app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static('public'))

function readUser(){
    const data = fs.readFileSync(path.join(__dirname, "user.json"))
    return JSON.parse(data);
}
app.get("/login", (req, res) =>{
    res.render("login", {title: "Login"})
})

app.post("/login", (req, res) =>{
    const {username, password} = req.body;

    const users = readUser();
    const user = users.find( e => e.username == username && e.password == password);

    if(user) {
        res.cookie("user", user.fullname);
        res.redirect("/dashboard");
    }else{
        res.render("login" ,{
            title: "Login",
            error: "Ivalid username or password",
            username
        });
    }
})

app.get("/dashboard", (req, res) =>{

    const user = req.cookies.user;
    if(!user)  return res.redirect("/login");
    res.render("Dashboard" , {title:"Dashboard", username : user})
})

app.get("/logout",(req, res) =>{
    res.clearCookie("user");
    res.redirect("/login");
})

const PORT = 3000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));