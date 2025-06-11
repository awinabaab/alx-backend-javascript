import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath).then((data) => {
      let responseText = 'This is the list of our students\n';

      let fields = {};
      fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const list = data[field];
        responseText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      });

      return res.status(200).send(responseText.trim());
    }).catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(filePath).then((data) => {
      const list = data[major];

      if (!list) {
        return res.status(200).send('List:');
      }

      return res.status(200).send(`List: ${list.join(', ')}`);
    }).catch((err) => res.status(500).send(err.message));
  }
}

export default StudentsController;
