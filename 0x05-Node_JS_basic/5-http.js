const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
  const results = [];
  const fieldCount = {};

  try {
    const data = await fs.readFile(path, 'utf8');
    if (data) {
      const lines = data.split('\n');
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          const [firstName, lastName, age, field] = line.split(',');
          results.push({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            age: age.trim(),
            field: field.trim(),
          });

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

    const totalStudents = results.length;
    let output = `Number of students: ${totalStudents}\n`;
    for (const [field, { count, students }] of Object.entries(fieldCount)) {
      output += `Number of students in ${field}: ${count}. List: ${students.join(', ')}\n`;
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const hostname = 'localhost';
const port = 1245;
const databaseFile = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const studentList = (await countStudents(databaseFile)).trim('\n');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${studentList}`);
    } catch (error) {
    //   console.error(error); // Log the error for debugging
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    // res.writeHead(404, { 'Content-Type': 'text/plain' });
    // res.end('Endpoint not found');
  }
});

app.listen(port, hostname);

module.exports = app;
