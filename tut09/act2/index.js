const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tut09' 
});

const app = express();



// 1) /games/genres — trả danh sách genres
app.get('/games/genres', (req, res) => {
    const sql = "SELECT id, genre_name FROM genres ORDER BY genre_name ASC";

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(rows);
    });
});

// 2) /games/list/:genreid/:year — lấy game theo genre + năm
app.get('/games/list/:genreid/:year', (req, res) => {
    const genreId = req.params.genreid;
    const year = req.params.year;

    const sql = `
        SELECT g.id, g.name, g.platform, g.publisher
        FROM games g
        JOIN genres gn ON g.genre = gn.id
        WHERE g.genre = ?
          AND g.release_year = ?
        LIMIT 10
    `;

    connection.query(sql, [genreId, year], (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });
        res.json(rows);
    });
});

/* ========================================
   START SERVER
======================================== */

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
