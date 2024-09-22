const http = require('http');
// eslint-disable-next-line no-unused-vars
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

// get database file
const databaseFile = process.argv[2];

// create http server
const app = http.createServer(async (req, res) => {
  // set the response http header with the http status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // handle routin based on the request URL
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentList = await countStudents(databaseFile);
      res.end(`This is the list of our students\n${studentList.trim('\n')}`);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    //
  }
});

// make the server listen on teh specified port
app.listen(port, hostname);

module.exports = app;
