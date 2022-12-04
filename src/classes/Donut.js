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

  // setters
  set gameName(name) {
    this._gameName = name;
  }

  set donuts(donuts) {
    this._donutController((oldDonuts) => oldDonuts + donuts);
  }

  clickDonut() {
    console.log('clicked');
    this.donuts(10);
    this._donutsClicked += 1;
  }
}
