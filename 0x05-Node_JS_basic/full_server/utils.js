import fs from 'fs';

function readDatabase(filePath) {
  return fs.promises.readFile(filePath, 'utf-8')
    .then((content) => {
      const lines = content.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift().split(',');
      const fieldIdx = header.indexOf('field');
      const firstNameIdx = header.indexOf('firstname');
      const students = {};

      lines.forEach((line) => {
        const data = line.split(',');
        const field = data[fieldIdx];
        const firstName = data[firstNameIdx];

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(firstName);
      });

      return students;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
