function Port(name) {
  this.name = name;
  // create a ship array to store multiple items on a port object
  this.ships = [];

};
// create an addShip function
Port.prototype.addShip = function addShip(ship) {
  // creates the ability to add a collection of items to a ship object
  this.ships.push(ship);
};
// create a removeShip function
Port.prototype.removeShip = function removeShip(ship) {
// remove items from a Ships array and returns the position of the first occurrence in a string
  this.ships.splice(this.ships.indexOf(ship), 1);
};
module.exports = Port;
