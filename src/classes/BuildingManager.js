export default class BuildingManager {
  constructor(donut) {
    this._totalRate = 0;
    this._buildings = [];
    this._donutGame = donut;
  }

  // getters
  get buildings() {
    return this._buildings;
  }

  get totalRate() {
    return this._totalRate;
  }

  get donutGame() {
    return this._donutGame;
  }

  // setters
  set totalRate(rate) {
    this._totalRate = rate;
  }

  set buildings(newBuildings) {
    this._buildings = newBuildings;
  }

  calcTotalRate() {}

  addBuilding(building) {
    this._buildings.push(building);
  }

  // getNumberofBuildingType() {
  //   const typeList = this._buildings.
  // }
}
