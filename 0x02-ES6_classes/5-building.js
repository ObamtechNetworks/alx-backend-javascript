export default class Building {
  constructor(sqft) {
    /* eslint-disable no-underscore-dangle */
    this._sqft = sqft;
    setTimeout(() => {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }, 0);
  }

  get sqft() {
    return this._sqft;
  }
}
