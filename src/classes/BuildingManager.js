import {
  Bank,
  Bezos,
  Church,
  Cook,
  Farm,
  Grandpa,
  Rig,
  Toe,
  UnpaidIntern,
} from './Buildings';

/**
 * This class is to manage all the buildings in the game. 
 * That includes when one is purchased or sold, gets the total buildings, and the increase or decrease in the rate.
 */
export default class BuildingManager {
  constructor(donut, gameState, gameStateController) {
    this._totalRate = gameState.donutInfo.rate;
    this._buildings = [];
    this._donutGame = donut;
    this._gameState = gameState;

    this._totalToes = gameState.toeInfo.totalToes;
    this._combinedToesRates = gameState.toeInfo.combinedToesRates;

    this._totalIntern = gameState.internInfo.totalInterns;
    this._combinedInternRates = gameState.internInfo.combinedInternRates;

    this._totalCooks = gameState.cookInfo.totalCooks;
    this._combinedCookRates = gameState.cookInfo.combinedCookRates;

    this._totalGrandpas = gameState.grandpaInfo.totalGrandpas;
    this._combinedGrandpaRates = gameState.grandpaInfo.combinedGrandpaRates;

    this._totalFarms = gameState.farmInfo.totalFarms;
    this.combinedFarmRates = gameState.farmInfo.combinedFarmRates;

    this._totalRigs = gameState.rigInfo.totalRigs;
    this._combinedRigRates = gameState.rigInfo.combinedRigRates;

    this._totalBanks = gameState.bankInfo.totalBanks;
    this._combinedBankBanks = gameState.bankInfo.combinedBankRates;

    this._totalChurches = gameState.churchInfo.totalChurches;
    this._combinedChurchRates = gameState.churchInfo.combinedChurchRates;

    this._totalBezos = gameState.bezosInfo.totalBezos;
    this._combinedBezoRate = gameState.bezosInfo.combinedBezoRate;

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

  get combinedToesRates() {
    return this._combinedToesRates;
  }

  get totalIntern() {
    return this._totalIntern;
  }

  get combinedInternRates() {
    return this._combinedInternRates;
  }

  get totalCooks() {
    return this._totalCooks;
  }

  get combinedCookRates() {
    return this._combinedCookRates;
  }

  get totalGrandpas() {
    return this._totalGrandpas;
  }

  get combinedGrandpaRates() {
    return this._combinedGrandpaRates;
  }

  get totalFarms() {
    return this._totalFarms;
  }

  // get combinedFarmRates() {
  //   return this._combinedFarmRates;
  // }

  get totalRigs() {
    //testq
    return this._totalRigs;
  }

  get combinedRigRates() {
    return this._combinedRigRates;
  }

  get totalBanks() {
    return this._totalBanks;
  }

  get combinedBankRates() {
    return this._combinedBankRates;
  }

  get totalChurches() {
    return this._totalChurches;
  }

  get combinedChurchRates() {
    return this._combinedChurchRates;
  }

  get totalBezos() {
    return this._totalBezos;
  }

  get combinedBezoRate() {
    return this._combinedBezoRate;
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

  set combinedToesRates(toes) {
    this._gameController((prevState) => ({
      ...prevState,
      toeInfo: {
        ...prevState.toeInfo,
        combinedToesRates: prevState.toeInfo.combinedToesRates + toes,
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

  set combinedInternRates(q) {
    this._gameController((prevState) => ({
      ...prevState,
      internInfo: {
        ...prevState.internInfo,
        combinedInternRates: prevState.internInfo.combinedInternRates + q,
      },
    }));
  }

  set totalCooks(cook) {
    this._gameController((prevState) => ({
      ...prevState,
      cookInfo: {
        ...prevState.cookInfo,
        totalCooks: prevState.cookInfo.totalCooks + cook,
      },
    }));
  }

  set combinedCookRates(cook) {
    this._gameController((prevState) => ({
      ...prevState,
      cookInfo: {
        ...prevState.cookInfo,
        combinedCookRates: prevState.cookInfo.combinedCookRates + cook,
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

  set combinedGrandpaRates(grandpa) {
    this._gameController((prevState) => ({
      ...prevState,
      grandpaInfo: {
        ...prevState.grandpaInfo,
        combinedGrandpaRates:
          prevState.grandpaInfo.combinedGrandpaRates + grandpa,
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

  // set combinedFarmRates(farms) {
  //   this._gameController((prevState) => ({
  //     ...prevState,
  //     farmInfo: {
  //       ...prevState.farmInfo,
  //       combinedFarmRates: prevState.farmInfo.combinedFarmRates + farms,
  //     },
  //   }));
  // }

  set totalRigs(rigs) {
    this._gameController((prevState) => ({
      ...prevState,
      rigInfo: {
        ...prevState.rigInfo,
        totalRigs: prevState.rigInfo.totalRigs + rigs,
      },
    }));
  }

  set combinedRigRates(rigs) {
    this._gameController((prevState) => ({
      ...prevState,
      rigInfo: {
        ...prevState.rigInfo,
        combinedRigRates: prevState.rigInfo.combinedRigRates + rigs,
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

  set combinedBankRates(banks) {
    this._gameController((prevState) => ({
      ...prevState,
      bankInfo: {
        ...prevState.bankInfo,
        combinedBankRates: prevState.bankInfo.combinedBankRates + banks,
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

  set combinedChurchRates(churches) {
    this._gameController((prevState) => ({
      ...prevState,
      churchInfo: {
        ...prevState.churchInfo,
        combinedChurchRates:
          prevState.churchInfo.combinedChurchRates + churches,
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

  set combinedBezoRate(bezos) {
    this._gameController((prevState) => ({
      ...prevState,
      bezosInfo: {
        ...prevState.bezosInfo,
        combinedBezoRate: prevState.bezosInfo.combinedBezoRate + bezos,
      },
    }));
  }

  set totalOfAllBuildings(allBuildings) {
    this._gameController((prevState) => ({
      ...prevState,
      totalBuildingInfo: {
        ...prevState.totalBuildingInfo,
        totalOfAllBuildings:
          prevState.totalBuildingInfo.totalOfAllBuildings + allBuildings,
      },
    }));
  }

  /**
   * This method calculates the total rate for the user
   * @param {*} newBuilding 
   */
   calcTotalRate(newBuilding) {
    console.log('Calculating total rate');

    this.totalRate = newBuilding.donutRate;
  }
  
  /**
   * This function calculates the total number of buildings that the user has purchased
   * @param {type} instanceType 
   * @param {string} buildingType - Name of the building 
   */
 calcTotalofNumberOfaBuilding(instanceType, buildingType) {
    console.log('Recalculating building total');
    const targetBuilding = this._buildings.map(
      (building) => building instanceof instanceType,
    );
    const buildingSum = targetBuilding.length;

    if (buildingType === 'Toe') {
      this.totalToes = buildingSum;
      this.combinedToesRates = +new Toe().donutRate;
    } else if (buildingType === 'Unpaid Intern') {
      this.totalIntern = buildingSum;
      this.combinedInternRates = +new UnpaidIntern().donutRate;
    } else if (buildingType === 'Cook') {
      this.totalCooks = buildingSum;
      this.combinedCookRates = +new Cook().donutRate;
    } else if (buildingType === 'Grandpa') {
      this.totalGrandpas = buildingSum;
      this.combinedGrandpaRates = +new Grandpa().donutRate;
    } else if (buildingType === 'Farm') {
      this.totalFarms = buildingSum;
      this.combinedFarmRates = +new Farm().donutRate;
    } else if (buildingType === 'Rig') {
      this.totalRigs = buildingSum;
      this.combinedRigRates = +new Rig().donutRate;
    } else if (buildingType === 'Bank') {
      this.totalBanks = buildingSum;
      this.combinedBankRates = +new Bank().donutRate;
    } else if (buildingType === 'Church') {
      this.totalChurches = buildingSum;
      this.combinedChurchRates = +new Church().donutRate;
    } else if (buildingType === 'Beezos') {
      this.totalBezos = buildingSum;
      this.combinedBezoRate = +new Bezos().donutRate;
    }

    this.totalOfAllBuildings = buildingSum;
    //console.log(new Toe().donutRate)
  }

  /**
   * This function will let the user know that the building has been added and the total number of buildings goes up.
   * @param {string} building - Upgrade
   * @param {type} instanceType 
   * @param {string} buildingType - Name of building
   */
 addBuilding(building, instanceType, buildingType) {
  console.log('Adding new building');
  this._buildings.push(building);
  console.log('New Building Added');
  this.calcTotalofNumberOfaBuilding(instanceType, buildingType);
  console.log('Adding to total rate');
  this.calcTotalRate(building);
}
}
