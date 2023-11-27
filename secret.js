const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// SQL Injection Vulnerability
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const query = `SELECT * FROM Users WHERE username = '${username}' AND password = '${password}'`;

  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    if (result.recordset.length > 0) {
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
