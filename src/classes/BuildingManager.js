import { Toe, UnpaidIntern } from './Buildings';

export default class BuildingManager {
  constructor(donut, gameState, gameStateController) {
    this._totalRate = gameState.donutInfo.rate;
    this._buildings = [];
    this._donutGame = donut;
    this._gameState = gameState;
    this._totalToes = gameState.toeInfo.totalToes;
    this._totalIntern = gameState.internInfo.totalInterns;
    this._totalCook = gameState.cookInfo.totalCooks;
    this._totalGranpa = gameState.grandpaInfo.totalGrandpas;
    this._totalFarm = gameState.farmInfo.totalFarms;
    this._totalRig = gameState.rigInfo.totalRigs;
    this._totalBank = gameState.bankInfo.totalBanks;
    this._totalChurch = gameState.churchInfo.totalChurches;
    this._bezosInfo = gameState.bezosInfo.totalBezos;
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
    this._gameController((prevState) => ({
      ...prevState,
      donutInfo: {
        ...prevState.donutInfo,
        rate: prevState.donutInfo.rate + rate,
      },
    }));
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

  calcTotalRate(newBuilding) {
    console.log('Calculating total rate');

    this.totalRate = newBuilding.donutRate;
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
    console.log('Adding to total rate');
    this.calcTotalRate(building);
  }
}
