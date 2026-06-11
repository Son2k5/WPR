const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tut09'  
});

const app = express();


// 1) Tất cả game được phát triển bởi Nintendo (không trùng)
app.get("/activity1/q1", (req, res) => {
    const sql = "SELECT DISTINCT name FROM games WHERE developer = 'Nintendo'";

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.json(rows);
    });
});

// 2) 20 game phát hành sớm nhất
app.get("/activity1/q2", (req, res) => {
    const sql = `
        SELECT name, release_year
        FROM games
        ORDER BY release_year ASC
        LIMIT 20
    `;

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.json(rows);
    });
});

// 3) Game có "Spyro" nhưng không có "Skylanders"
app.get("/activity1/q3", (req, res) => {
    const sql = `
        SELECT name, platform, release_year
        FROM games
        WHERE name LIKE '%Spyro%'
        AND name NOT LIKE '%Skylanders%'
    `;

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.json(rows);
    });
});

// 4) Average release_year (rounded)
app.get("/activity1/q4", (req, res) => {
    const sql = `
        SELECT ROUND(AVG(release_year)) AS avg_release_year
        FROM games
    `;

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.json(rows[0]); // chỉ có 1 dòng
    });
});

// 5) Puzzle games released in the earliest Puzzle year
app.get("/activity1/q5", (req, res) => {
    const sql = `
        SELECT name, release_year
        FROM games
        WHERE genre = 'Puzzle'
          AND release_year = (
                SELECT MIN(release_year)
                FROM games
                WHERE genre = 'Puzzle'
          )
    `;

    connection.query(sql, (err, rows) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.json(rows);
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
