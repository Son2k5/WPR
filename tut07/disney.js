"use strict";

const express = require("express");
const app = express();

const fs = require("fs").promises;
const multer = require("multer");

// for application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) // built-in middleware
// for application/json
app.use(express.json()); // built-in middleware
// for multipart/form-data (required with FormData)
app.use(multer().none()); // requires the "multer" module

// define 'add' endpoint here
app.post("/add", async (req, res) => {
    try {
        const { movie, year, song, rating } = req.body;

        // Kiểm tra param
        if (!movie || !year || !song || !rating) {
            return res.status(400).send("Missing required parameters");
        }

        const moviesFilePath = "./movies.json";

        // Kiểm tra file tồn tại
        try {
            await fs.access(moviesFilePath);
        } catch {
            return res.status(404).send("file does not exist");
        }

        // Đọc file
        const fileData = await fs.readFile(moviesFilePath, "utf8");
        let movies = {};
        if (fileData) {
            movies = JSON.parse(fileData);
        }

        const movieKey = movie.toLowerCase().replace(/\s+/g, "-");

        movies[movieKey] = {
            "release-year": Number(year),
            "featured-song": song,
            "rotten-tomatoes": Number(rating)
        };

        await fs.writeFile(moviesFilePath, JSON.stringify(movies, null, 2));

        if (fileData && JSON.parse(fileData)[movieKey]) {
            res.send("updated information for designated movie");
        } else {
            res.send("added information for designated movie");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("something went wrong on the server");
    }
});

app.listen(8000);