export default class Rate {
  constructor() {
    this._totalRate = 0;
  }

  // getters
  get totalRate() {
    return this._totalRate;
  }

  // setters
  set totalRate(rate) {
    this._totalRate = rate;
  }

  calculateTotalRate(game) {
    // if (buildings.length > 0) {
    //   const newBuilding = buildings[buildings.length - 1];
    //   setDonuts((oldDonuts) => oldDonuts - newBuilding.cost);
    //   setTotalRate((oldRate) => oldRate + newBuilding.donutRate);
    // } else {
    //   return 0;
    // }
  }
}
