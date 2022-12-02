export default class Donut {
  gameName;
  donuts;
  donutsClicked;

  constructor(gameName) {
    this.gameName = gameName;
    this.donuts = 0;
    this.donutsClicked = 0;
  }

  // // getters
  // get gameName() {
  //   return this.gameName;
  // }

  // get donuts() {
  //   return this.donuts;
  // }

  // // setters
  // set gameName(name) {
  //   this.gameName = name;
  // }

  // set donuts(donuts) {
  //   this.donuts = donuts;
  // }

  clickDonut() {
    this.donuts += 1;
  }
}
