import { Toe } from "./Buildings";

export default class BuildingManager {
  constructor(donut,setTotalToes,totalToes) {
    this._totalRate = 0;
    this._buildings = [];
    this._donutGame = donut;
    this._totalToes =totalToes
    this._setTotalToes =setTotalToes
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
  get totalToes() {
    return this._totalToes;
  }

  // setters
  set totalRate(rate) {
    this._totalRate = rate;
  }

  set buildings(newBuildings) {
    this._buildings = newBuildings;
  }
  set totalToes(toes) {
    this._setTotalToes(toes)
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
    console.log("rate"+ sum)
    

    
  }

  calcTotalToes(){
    let totalToesArray = this.mapGetField(this._buildings,"_name" )
    let sum =0
    for (let i = 0; i <this.buildings.length; i++){
      if(totalToesArray[i]== "Toe") {
        sum += 1;
        
      }
    }
    
    this._setTotalToes = sum;
    console.log("totalToes" +sum)

    
  }


  
}
