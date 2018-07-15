// created constructors to ensure  the tests to pass
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

// Create a .setsail method
Ship.prototype.setSail = function setSail() {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  // Check if we are at the end of the itinerary.
  // If we are we don't want to set stail, so raise an error
  if ((currentPortIndex) === (itinerary.ports.length - 1)) {
    throw new Error('End of itinerary reached');
  }

  // We have set sail, so are no longer at a port. Set the previous port
  // to the one we just left and the current port to nothing, as we
  // are at sea
  this.previousPort = this.currentPort;
  // this code is possibly no longer relevant but confirm - 
  this.currentPort.removeShip(this);
  this.currentPort = null;
};

// Create a dock method to ensure the ship docks at different ports
Ship.prototype.dock = function dock() {
  const itinerary = this.itinerary;
  // identify the position in the itinerary of the previous port
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  // get the port the ship is docking at from the itinerary
  // Increment the previous port index to identify the new port in the itinerary
  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};


module.exports = Ship;
