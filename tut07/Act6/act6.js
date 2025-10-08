'use strict';

const express = require('express');
const cookieParser = require('cookie-parser'); // middleware xử lý cookies
const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // xử lý form data
app.use(cookieParser());

// /page1
app.get('/page1', (req, res) => {
    const userName = req.cookies.user_name;

    if (userName) {
        res.send(`<h2>Welcome ${userName}</h2>`);
    } else {
        res.send(`
            You’re not recognized.<br />
            Please register your name <a href="/page2">here</a>.
        `);
    }
});

// /page2 (GET) — hiển thị form nhập tên
app.get('/page2', (req, res) => {
    res.send(`
        <h2>Register your name</h2>
        <form method="POST" action="/page2">
            <label for="username">Enter your name:</label><br/>
            <input type="text" id="username" name="username" required/><br/>
            <button type="submit">Save</button>
        </form>
    `);
});

// /page2 (POST) — lưu cookie user_name
app.post('/page2', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.send("Name is required.");
    }

    res.cookie('user_name', username, { maxAge: 60 * 1000 }); // 1 phút = 60000ms
    res.send(`
        Name saved successfully!<br/>
        Go to <a href="/page1">Page 1</a>.
    `);
});

app.listen(PORT, () => {
    console.log(`Cookies app running at http://localhost:${PORT}`);
});
