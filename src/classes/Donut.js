import BuildingManager from './BuildingManager';

export default class Donut {
  constructor(donuts, setDonuts) {
    this._gameName = 'Donut Clicker';
    this._donuts = donuts;
    this._donutsClicked = 0;
    this._donutController = setDonuts;
  }

  // getters
  get gameName() {
    return this._gameName;
  }

  get donuts() {
    return this._donuts;
  }

  get donutsClicked() {
    return this._donutsClicked;
  }

  // setters
  set gameName(name) {
    this._gameName = name;
  }

  set donuts(donuts) {
    this._donutController((oldDonuts) => oldDonuts + donuts);
  }

  set donutsClicked(donuts) {
    this._donutsClicked = donuts;
  }

  clickDonut() {
    this.donuts = 1;
    this.donutsClicked = 1;
  }
}
