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
  }
}

export class Cook extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 47;
    this.buildingCost = 1100;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Grandpa extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 47;
    this.buildingCost = 12000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Farm extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 260;
    this.buildingCost = 130000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Rig extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1400;
    this.buildingCost = 1400000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Bank extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 7800;
    this.buildingCost = 20000000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Church extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 44000;
    this.buildingCost = 330000000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}

export class Bezos extends Buildings {
  constructor(donutRate, buildingCost, buff) {
    super(donutRate, buildingCost, buff);
    this.donutRate = 1600000;
    this.buildingCost = 75000000000;
  }

  increaseBuildingCost() {
    super.increaseBuildingCost();
  }
}
