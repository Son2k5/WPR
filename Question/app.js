const express = require('express');
const app = express();
const path = require("path");
const { title } = require('process');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) =>{
    res.render("home",{title: "Home"})
})
app.get("/contact",(req, res) =>{
    res.render("contact", {title: "Contact us "})
})
app.get("/service",(req, res) =>{
    res.render("service", {title: "Service"})
})
app.get("/about",(req, res) =>{
    res.render("about", {title: "About us "})
})

app.listen(3000, () =>{
    console.log('server listen on: http://localhost:3000');
})