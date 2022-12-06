/**
 * This class is the parent class to all the buildings.
 */
 export class Buildings {
  constructor() {
    this._donutRate = 0;
    this._buildingCost = 0;
    this._costIncreaseRate = 0.15;
    this._buff = 0;
  }

  // getters
  get donutRate() {
    return this._donutRate;
  }

  get buildingCost() {
    return this._buildingCost;
  }

  // setters
  set donutRate(rate) {
    this._donutRate = rate;
  }

  set buildingCost(cost) {
    this._buildingCost = cost;
  }

  // methods
  /**
   * This method increases the cost of the building after it has been purchased.
   */
   increaseBuildingCost() {
    let newCost =
      this._buildingCost * this._costIncreaseRate + this._buildingCost;

    this._buildingCost = Math.round(newCost);
  }

  /**
   * This method decreases the cost of the building after the user has sold that building.
   */
   decreaseBuildingCost() {
    let newCost = (1 - this._costIncreaseRate) * this._buildingCost;
    console.log(newCost);
    this._buildingCost = Math.ceil(newCost);
  }

  /**
   * This method is to increase or decrease the rate based on how many buildings the user has.
   */
   applyBuildingBuff() {
    let newRate = this._donutRate * this.buff;
    this._donutRate = Math.round(newRate);
  }
}

/**
 * This is the child class "Toe" to "Buildings".
 * It sets the rate to increase by 1, cost is 15 and sets the buff to 1.01.
 */
 export class Toe extends Buildings {
  constructor(buildingCost, donutRate, buff) {
    super(buildingCost, donutRate, buff);
    this._donutRate = 1;
    this._buildingCost = 15;
    this._buff = 1.01;
  }
}

/**
 * This is the child class "UnpaidIntern" to "Buildings".
 * It sets the rate to increase by 8, cost is 100 and sets the buff to 1.02.
 */
 export class UnpaidIntern extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this._donutRate = 8;
    this._buildingCost = 100;
    this._buff = 1.02;
  }
}

/**
 * This is the child class "Cook" to "Buildings".
 * It sets the rate to increase by 47, cost is 1100 and sets the buff to 1.04.
 */
export class Cook extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 47;
    this.buildingCost = 1100;
    this._buff = 1.04;
  }
}

/**
 * This is the child class "Grandpa" to "Buildings".
 * It sets the rate to increase by 260, cost is 12000 and sets the buff to 1.1.
 */
export class Grandpa extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 260;
    this.buildingCost = 12000;
    this._buff = 1.1;
  }
}

/**
 * This is the child class "Farm" to "Buildings".
 * It sets the rate 1400 increase by 47, cost is 130000 and sets the buff to 1.2.
 */
export class Farm extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1400;
    this.buildingCost = 130000;
    this._buff = 1.2;
  }
}

/**
 * This is the child class "Rig" to "Buildings".
 * It sets the rate to increase by 7800, cost is 1400000 and sets the buff to 1.3.
 */
export class Rig extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 7800;
    this.buildingCost = 1400000;
    this._buff = 1.3;
  }
}

/**
 * This is the child class "Bank" to "Buildings".
 * It sets the rate to increase by 44000, cost is 20000000 and sets the buff to 1.5.
 */
export class Bank extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 44000;
    this.buildingCost = 20000000;
    this._buff = 1.5;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

/**
 * This is the child class "Church" to "Buildings".
 * It sets the rate to increase by 260000, and cost is 330000000.
 */
export class Church extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 260000;
    this.buildingCost = 330000000;
  }
}

/**
 * This is the child class "Bezos" to "Buildings".
 * It sets the rate to increase by 1600000, cost is 51000000000 and sets the buff to 2.
 */
export class Bezos extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1600000;
    this.buildingCost = 51000000000;
    this._buff = 2;
  }
}
