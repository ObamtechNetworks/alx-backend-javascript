export default class Building {
  constructor(sqft) {
    /* eslint-disable no-underscore-dangle */
    if (!this.evacuationWarningMessage && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
