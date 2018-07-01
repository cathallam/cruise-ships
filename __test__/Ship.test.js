// import constructor file
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

// describing the Ship constructor:
describe('Ship', () => {
  it('creates an object instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

// Starting Port constructor
describe('Port', () =>{
  it('has a starting port', () => {
    const port = new Port('Southampton');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

// Ship is set to sail from port
describe('Sail', () => {
  it('setting sail', () => {
    const port = new Port('Southampton');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});
