const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(filePath) {
  return fs.promises.readFile(filePath, 'utf-8')
    .then((content) => {
      const data = content.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const numberOfStudents = data.length;
      const programStats = {};
      const stats = [];

      for (let line of data) {
        line = line.split(',');
        const key = line[line.length - 1];
        if (key in programStats) {
          programStats[key].count += 1;
          programStats[key].students.push(line[0]);
        } else {
          programStats[key] = { count: 1, students: [line[0]] };
        }
      }

      stats.push(`Number of students: ${numberOfStudents}`);

      for (const program of Object.keys(programStats)) {
        stats.push(`Number of students in ${program}: ${programStats[program].count}. List: ${programStats[program].students.join(', ')}`);
      }

      return stats;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = process.argv[2];
  countStudents(databaseName).then((data) => {
    data.unshift('This is the list of our students');
    res.send(data.join('\n'));
  }).catch((err) => res.send(`This is the list of our students\n${err.message}`));
});

app.listen(1245);

module.exports = app;
