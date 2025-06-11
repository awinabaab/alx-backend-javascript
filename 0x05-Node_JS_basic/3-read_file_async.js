const fs = require('fs');

function countStudents(filePath) {
  return fs.promises.readFile(filePath, 'utf-8')
    .then((content) => {
      const data = content.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const numberOfStudents = data.length;
      const programStats = {};

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

      console.log(`Number of students: ${numberOfStudents}`);

      for (const program of Object.keys(programStats)) {
        console.log(`Number of students in ${program}: ${programStats[program].count}. List: ${programStats[program].students.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
