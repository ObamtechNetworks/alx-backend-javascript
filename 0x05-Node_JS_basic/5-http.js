const http = require('http');
// eslint-disable-next-line no-unused-vars
const fs = require('fs').promises;

async function countStudents(path) {
  const results = [];
  const fieldCount = {};

  try {
    const data = await fs.readFile(path, 'utf8');
    if (data) {
      // split the file content into lines
      const lines = data.split('\n');

      // skip the header line and process each subsequent line
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          // split the line by comma
          const [firstName, lastName, age, field] = line.split(',');

          // push the student data (each student object) into results
          results.push({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            age: age.trim(),
            field: field.trim(),
          });

          // count students in each field
          if (fieldCount[field]) {
            fieldCount[field].count += 1;
            fieldCount[field].students.push(firstName.trim());
          } else {
            fieldCount[field] = {
              count: 1,
              students: [firstName.trim()],
            };
          }
        }
      }
    }

    // Total number of students
    const totalStudents = results.length;
    let output = `Number of students: ${totalStudents}\n`;

    // print number of studetns in each field
    for (const [field, { count, students }] of Object.entries(fieldCount)) {
      output += `Number of students in ${field}: ${count}. List: ${students.join(', ')}\n`;
    }
    return output; // Return the formatted string
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

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
      res.writeHead(200, { 'Content-Type': 'text/plain' });
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
