// full_server/controllers/StudentsController.js
// eslint-disable-next-line import/extensions
import { readDatabase } from '../utils.js';

// eslint-disable-next-line import/prefer-default-export
export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).write('This is the list of our students\n');

      Object.keys(students)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
        });

      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentList = students[major] || [];
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
