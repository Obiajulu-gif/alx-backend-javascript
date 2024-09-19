const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.write(`Number of students: ${data.total}\n`);
    for (const [field, students] of Object.entries(data.fields)) {
      res.write(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`,
      );
    }
    res.end();
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
