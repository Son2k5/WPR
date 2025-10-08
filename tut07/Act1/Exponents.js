const express = require('express');
const app = express();

app.get("/math/power/:base/:exponent", (req, res) => {
    const base = Number(req.params.base);
    const exponent = Number(req.params.exponent);

    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: "Invalid value" });
    }

    const result = Math.pow(base, exponent);
    const response = { result: result };

    if (req.query.root === "true") {
        response.root = Math.sqrt(base);
    }

    res.json(response);
});

app.listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
});
