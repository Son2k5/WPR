"use strict"
const express = require("express");
const app = express();

app.get('/math/circle/:r', (req, res) =>{
    let radious = req.params.r;
    const area = Math.PI * radious * radious;
    const cir = 2 * Math.PI * radious;
    res.json({
        area : area,
        cir : cir
    })
});
app.listen(8000, () => console.log('Circle API at http://localhost:8000/math/circle'));