export default class Building {
  constructor(sqft) {
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get _sqft() {
    return this._sqft;
  }
}
