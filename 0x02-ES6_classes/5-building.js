export default class Building {
  constructor(sqft) {
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;

    try {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    } catch (error) {
      return error;
    }
  }

  get sqft() {
    return this._sqft;
  }
}
