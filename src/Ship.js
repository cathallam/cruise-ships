function Ship(currentPort, passengers) {
  this.currentPort = currentPort;
  this.passengers = passengers;
};

Ship.prototype.setSail = function () {
  this.currentPort = null;
};

// Dock at a different port.
// Ship.prototype.dock = function () {
Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = Ship;
