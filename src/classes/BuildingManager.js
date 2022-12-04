import { Toe } from "./Buildings";

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
    console.log(building)
  }

  //https://stackoverflow.com/questions/71242296/get-specific-elements-of-a-map-in-javascript
  mapGetField(map, field) {
    let results = [];
    for (let value of map.values()) {
        results.push(value[field]);
    }
    return results;
  }

  calcTotalRate(){
    let totalRateArray = this.mapGetField(this._buildings,"_donutRate" )
    let sum = 0;
    for (let i = 0; i <totalRateArray.length; i++){
      sum += totalRateArray[i];
    }
    console.log(sum)
    

    
  }


  
}
