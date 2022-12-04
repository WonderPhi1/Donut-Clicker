import { Toe, UnpaidIntern } from './Buildings';

export default class BuildingManager {
  constructor(donut, gameState, gameStateController) {
    this._totalRate = 0;
    this._buildings = [];
    this._donutGame = donut;
    this._gameState = gameState;
    this._totalToes = gameState.toeInfo.totalToes;
    this._totalIntern = gameState.internInfo.totalInterns;
    this._gameController = gameStateController;
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

  get gameState() {
    return this._gameState;
  }

  get totalToes() {
    return this._totalToes;
  }

  get totalIntern() {
    return this._totalIntern;
  }

  // setters
  set totalRate(rate) {
    this._totalRate = rate;
  }

  set buildings(newBuildings) {
    this._buildings = newBuildings;
  }

  set totalToes(toes) {
    this._gameController((prevState) => ({
      ...prevState,
      toeInfo: {
        ...prevState.toeInfo,
        totalToes: prevState.toeInfo.totalToes + toes,
      },
    }));
  }

  set totalIntern(intern) {
    this._gameController((prevState) => ({
      ...prevState,
      internInfo: {
        ...prevState.internInfo,
        totalInterns: prevState.internInfo.totalInterns + intern,
      },
    }));
  }

  calcTotalRate() {}

  //https://stackoverflow.com/questions/71242296/get-specific-elements-of-a-map-in-javascript
  mapGetField(map, field) {
    let results = [];
    for (let value of map.values()) {
      results.push(value[field]);
    }
    return results;
  }

  calcTotalRate() {
    let totalRateArray = this.mapGetField(this.buildings, '_donutRate');
    let sum = 0;

    for (let i = 0; i < totalRateArray.length; i++) {
      sum += totalRateArray[i];
    }
    console.log(this._buildings.length);
  }

  calcTotalofNumberOfaBuilding(instanceType, buildingType) {
    console.log('Recalculating building total');
    const targetBuilding = this._buildings.map(
      (building) => building instanceof instanceType,
    );
    const buildingSum = targetBuilding.length;

    if (buildingType == 'Toe') {
      this.totalToes = buildingSum;
    } else if (buildingType == 'Unpaid Intern') {
      this.totalIntern = buildingSum;
    }
  }

  addBuilding(building, instanceType, buildingType) {
    console.log('Adding new building');
    this._buildings.push(building);
    console.log('New Building Added');
    this.calcTotalofNumberOfaBuilding(instanceType, buildingType);
  }
}
