const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SQL Injection Vulnerability
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = {
    text: 'SELECT * FROM users WHERE username = $1 AND password = $2',
    values: [username, password],
  };

  pool.query(query, (err, result) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    if (result.rows.length > 0) {
      return res.send('Login Successful');
    } else {
      return res.status(401).send('Login Failed');
    }
  });
});

// XSS Vulnerability
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;

  res.send(`<p>Search results for: ${searchTerm}</p>`);
});

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
