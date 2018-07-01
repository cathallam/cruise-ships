function Ship(currentPort, passengers) {
  this.currentPort = currentPort;
  this.passengers = passengers;
};

Ship.prototype.setSail = function () {
  this.currentPort = null;
};

// Dock at a different port.
Ship.prototype.dock = function () {

};

module.exports = Ship;
