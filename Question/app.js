const express = require('express');
const mysql = require('mysql2');

// (1) Connect to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'tut09'
});

const app = express();
app.get('/games/:id', async(req, res) => {
    const gameId = req.params.id;
    
    // (2) Retrieve the game with the id from the URL
    const query = 'SELECT id, name, release_year FROM games WHERE id = ?';
    
    connection.query(query, [gameId], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        if (results.length === 0) {
            return res.status(404).json({ error: 'Game not found' });
        }
        

        const game = results[0];
        res.json({
            id: game.id,
            name: game.name,
            release_year: game.release_year
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});