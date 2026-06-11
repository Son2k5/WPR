const express = require("express");
const app = express();

app.get("/math/power/:base/:exponent", (req, res) =>  {
    const base = req.params.base;
    const exponent = req.params.exponent;
    const root = req.query.root;

    if(isNaN(base) || isNaN(exponent)){
        return res.status(400).json({error: "Invalid value"})
    }
    const result = Math.pow(base, exponent);
    const response = {result: result};
    if(root === "true"){
        response.root= Math.sqrt(base);
    }
    res.json(response);
});

app.listen(8000);