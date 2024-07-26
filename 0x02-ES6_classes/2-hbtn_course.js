export default class HolbertonCourse {
  constructor(name, length, students) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = this._validateName(name);
    // eslint-disable-next-line no-underscore-dangle
    this._length = this._validateLength(length);
    // eslint-disable-next-line no-underscore-dangle
    this._students = this._validateStudents(students);
  }

  // private validation methods
  /* eslint-disable class-methods-use-this */
  // eslint-disable-next-line no-underscore-dangle
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  /* eslint-disable class-methods-use-this */
  // eslint-disable-next-line no-underscore-dangle
  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  /* eslint-disable class-methods-use-this */
  // eslint-disable-next-line no-underscore-dangle
  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }

  // Getter and Setter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(name) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = this._validateName(name);
  }

  // Getter and Setter for length
  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(length) {
    // eslint-disable-next-line no-underscore-dangle
    this._length = this._validateLength(length);
  }

  // Getter and Setter for students
  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(students) {
    // eslint-disable-next-line no-underscore-dangle
    this._students = this._validateStudents(students);
  }
}
