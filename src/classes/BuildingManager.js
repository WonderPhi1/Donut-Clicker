import { Toe, UnpaidIntern } from './Buildings';

export default class BuildingManager {
  constructor(donut, gameState, gameStateController) {
    this._totalRate = gameState.donutInfo.rate;
    this._buildings = [];
    this._donutGame = donut;
    this._gameState = gameState;
    this._totalToes = gameState.toeInfo.totalToes;
    this._totalIntern = gameState.internInfo.totalInterns;
    this._totalCooks = gameState.cookInfo.totalCooks;
    this._totalGrandpas = gameState.grandpaInfo.totalGrandpas;
    this._totalFarms = gameState.farmInfo.totalFarms;
    this._totalRigs = gameState.rigInfo.totalRigs;
    this._totalBanks = gameState.bankInfo.totalBanks;
    this._totalChurches = gameState.churchInfo.totalChurches;
    this._totalBezos = gameState.bezosInfo.totalBezos;
    this._totalOfAllBuildings = gameState.totalBuildingInfo.totalOfAllBuildings;
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

  get totalCooks() {
    return this._totalCooks;
  }

  get totalGrandpas() {
    return this._totalGrandpas;
  }

  get totalFarms() {
    return this._totalFarms;
  }

  get totalRigs() {
    return this._totalRigs;
  }

  get totalBanks() {
    return this._totalBanks;
  }

  get totalChurches() {
    return this._totalChurches;
  }

  get totalBezos() {
    return this._totalBezos;
  }

  get totalOfAllBuildings() {
    return this._totalOfAllBuildings;
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
  
  set totalCook(cook) {
    this._gameController((prevState) => ({
      ...prevState,
      cookInfo: {
        ...prevState.cookInfo,
        totalCooks: prevState.cookInfo.totalCooks + cook,
      },
    }));
  }

  set totalGrandpas(grandpa) {
    this._gameController((prevState) => ({
      ...prevState,
      grandpaInfo: {
        ...prevState.grandpaInfo,
        totalGrandpas: prevState.grandpaInfo.totalGrandpas + grandpa,
      },
    }));
  }

  set totalFarms(farms) {
    this._gameController((prevState) => ({
      ...prevState,
      farmInfo: {
        ...prevState.farmInfo,
        totalFarms: prevState.farmInfo.totalFarms + farms,
      },
    }));
  }

  set totalRigs(rigs) {
    this._gameController((prevState) => ({
      ...prevState,
      rigInfo: {
        ...prevState.rigInfo,
        totalRigs: prevState.rigInfo.totalRigs + rigs,
      },
    }));
  }

  set totalBanks(banks) {
    this._gameController((prevState) => ({
      ...prevState,
      bankInfo: {
        ...prevState.bankInfo,
        totalBanks: prevState.bankInfo.totalBanks + banks,
      },
    }));
  }

  set totalChurches(churches) {
    this._gameController((prevState) => ({
      ...prevState,
      churchInfo: {
        ...prevState.churchInfo,
        totalChurches: prevState.churchInfo.totalChurches + churches,
      },
    }));
  }

  set totalBezos(bezos) {
    this._gameController((prevState) => ({
      ...prevState,
      bezosInfo: {
        ...prevState.bezosInfo,
        totalBezos: prevState.bezosInfo.totalBezos + bezos,
      },
    }));
  }

  

  set totalOfAllBuildings(allBuildings) {
    this._gameController((prevState) => ({
      ...prevState,
      totalBuildingInfo: {
        ...prevState.totalBuildingInfo,
        totalOfAllBuildings: prevState.totalBuildingInfo.totalOfAllBuildings + allBuildings,
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

    if (buildingType === 'Toe') {
      this.totalToes = buildingSum;
    } else if (buildingType === 'Unpaid Intern') {
      this.totalIntern = buildingSum;
    }else if (buildingType === 'Cook') {
      this.totalCooks = buildingSum;
    }else if (buildingType === 'Grandpa') {
      this.totalGrandpas = buildingSum;
    }else if (buildingType === 'Farm') {
      this.totalFarms = buildingSum;
    }else if (buildingType === 'Rig') {
      this.totalRigs = buildingSum;
    }else if (buildingType === 'Bank') {
      this.totalBanks = buildingSum;
    }else if (buildingType === 'Church') {
      this.totalChurches = buildingSum;
    }else if (buildingType === 'Beezos') {
      this.totalBezos = buildingSum;
    }

    this.totalOfAllBuildings =buildingSum;
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
