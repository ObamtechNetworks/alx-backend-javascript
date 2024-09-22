// full_server/controllers/AppController.js
// eslint-disable-next-line import/prefer-default-export
export class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
