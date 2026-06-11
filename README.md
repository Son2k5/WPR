# WPR Coursework Repository

This repository contains tutorial exercises for the WPR course. The course focuses on practical web programming skills, starting with HTML, CSS, and JavaScript fundamentals, then moving into asynchronous programming, Node.js, Express.js, database access, and React development with Vite.

The main learning direction is React-based web development, with the earlier tutorials building the front-end, back-end, and API foundations needed to create modern full-stack applications.

## Learning Objectives

- Build structured web pages with HTML and CSS.
- Apply JavaScript for DOM manipulation, events, timers, and browser interaction.
- Use asynchronous JavaScript with Promises, `async`/`await`, and `fetch`.
- Create basic HTTP servers and REST-style APIs with Node.js and Express.js.
- Work with cookies, forms, template engines, and simple authentication flows.
- Connect Express applications to MySQL and MongoDB.
- Build and run a React application using Vite.

## Technology Stack

| Area | Technologies |
| --- | --- |
| Front-end basics | HTML, CSS, JavaScript |
| Front-end framework | React, Vite |
| Server-side development | Node.js, Express.js |
| Template engines | EJS, Handlebars |
| Data and storage | JSON files, MySQL, MongoDB |
| Tooling | npm, ESLint, Nodemon |

## Repository Structure

| Folder | Main Content |
| --- | --- |
| `Tut1` | HTML and CSS fundamentals, personal profile page, box styling, and CSS selector exercises. |
| `tut02` | CSS layouts and JavaScript basics, including card styling, Japan flag layout, responsive page, quadratic equation solver, Pokeball interaction, and text capitalization. |
| `tut03` | DOM manipulation, events, timers, stopwatch, dynamic blog entries, card rendering, and a small whack-a-bug game. |
| `tut04` | Promises, `async`/`await`, countdown behavior, and JSON data rendering. |
| `tut05` | Form validation, AJAX, `fetch`, async login requests, and API-driven pet image loading. |
| `tut06` | Node.js and Express.js basics, including HTTP servers, product API, static files, and math routes for circles and rectangles. |
| `tut07` | Express APIs, form handling, login API, joke book API, Disney movie data submission, and cookie exercises. |
| `tut08` | EJS-based login and profile pages with encrypted cookies. |
| `tut8` | Handlebars-based login and dashboard flow using cookies. |
| `tut8MVC` | MVC-style project structure for controllers, middleware, models, and views. |
| `tut09` | MySQL-backed Express endpoints for game queries, genres, and filtered results. |
| `tut10` | MongoDB connection and document insertion practice. |
| `tut11` | React + Vite application demonstrating component rendering and state updates with `useState`. |
| `Question` | Additional Express/EJS practice project with routed pages and game lookup. |
| `test` | Static HTML, CSS, and JavaScript practice area. |

## Prerequisites

Install the following tools before running the exercises:

| Tool | Purpose |
| --- | --- |
| Node.js `20.19+` or `22.12+` | Required for the Vite version used in `tut11`. |
| npm | Installs JavaScript dependencies. |
| Web browser | Runs static HTML/CSS/JavaScript exercises. |
| MySQL Server | Required for `tut09` database exercises. |
| MongoDB Server | Required for `tut10` database exercises. |

## Installation

Install the root-level dependencies used by the Node.js and Express.js tutorials:

```bash
npm install
```

Install the React/Vite dependencies separately inside `tut11`:

```bash
cd tut11
npm install
```

## How to Run

### Static HTML Exercises

For tutorials that contain only `.html`, `.css`, and browser-side `.js` files, open the target HTML file directly in a browser.

Example:

```bash
Tut1/MyProfile/index.html
tut03/whack-a-bug/whack-a-bug.html
tut05/form_validation/index.html
```

Some exercises call external APIs. Make sure the browser has network access when running those activities.

### Node.js and Express Exercises

Run server-side exercises from the repository root with `node`:

```bash
node tut06/nodejs/Activity1/hello.js
node tut06/nodejs/act2/api.js
node tut07/jokebook-app.js
node tut08/app.js
node tut8/app.js
```

Most server exercises use either `http://localhost:8000` or `http://localhost:3000`. Run one server at a time, or change the port in the source file if another process is already using it.

### React/Vite Exercise

Run the React project from the `tut11` folder:

```bash
cd tut11
npm run dev
```

Then open the local URL printed by Vite, usually:

```bash
http://localhost:5173
```

Available React project commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs ESLint checks. |

### MySQL Exercises

The `tut09` exercises require a local MySQL database named `tut09`. The current examples connect with these settings:

| Setting | Value |
| --- | --- |
| Host | `localhost` |
| User | `root` |
| Password | `123456` |
| Database | `tut09` |

Update the connection settings in the relevant `tut09` files if your local database uses different credentials.

Example:

```bash
node tut09/act1/index.js
```

### MongoDB Exercise

The `tut10` exercise expects MongoDB to be running locally at:

```bash
mongodb://localhost:27017/
```

Example:

```bash
node tut10/act1/index.js
```

## Development Notes

- This repository is organized as coursework, so each tutorial folder is mostly independent.
- Several exercises use hard-coded ports, credentials, or sample data for learning purposes.
- For production projects, move sensitive values to environment variables and avoid committing generated folders such as `node_modules`.
- The folder names follow the original tutorial submissions, including both `tut08`, `tut8`, and `tut8MVC`.

## Project Status

This is an educational repository for WPR tutorial practice. It is intended to document learning progress across front-end development, server-side programming, database integration, and React application development.
