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
  increaseBuildingCost() {
    let newCost =
      this._buildingCost * this._costIncreaseRate + this._buildingCost;

    this._buildingCost = Math.round(newCost);
  }

  decreaseBuildingCost() {
    let newCost = (1 - this._costIncreaseRate) * this._buildingCost;
    console.log(newCost);
    this._buildingCost = Math.ceil(newCost);
  }

  applyBuildingBuff() {
    let newRate = this._donutRate * this.buff;
    this._donutRate = Math.round(newRate);
  }
}

export class Toe extends Buildings {
  constructor(buildingCost, donutRate, buff) {
    super(buildingCost, donutRate, buff);
    this._donutRate = 1;
    this._buildingCost = 15;
    this._buff = 1.01;
  }
}

export class UnpaidIntern extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this._donutRate = 8;
    this._buildingCost = 100;
    this._buff = 1.02;
  }
}

export class Cook extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 47;
    this.buildingCost = 1100;
    this._buff = 1.04;
  }
}

export class Grandpa extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 260;
    this.buildingCost = 12000;
    this._buff = 1.1;
  }
}

export class Farm extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1400;
    this.buildingCost = 130000;
    this._buff = 1.2;
  }
}

export class Rig extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 7800;
    this.buildingCost = 1400000;
    this._buff = 1.3;
  }
}

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

export class Church extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 260000;
    this.buildingCost = 330000000;
  }
}

export class Bezos extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1600000;
    this.buildingCost = 51000000000;
    this._buff = 2;
  }
}
