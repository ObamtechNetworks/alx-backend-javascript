export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = this._validateName(name);
    // eslint-disable-next-line no-underscore-dangle
    this._code = this._validateCode(code);
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
  _validateCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
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

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(code) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = this._validateCode(code);
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
