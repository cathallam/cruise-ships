// import constructor file
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

// describing the Ship constructor and check the new Ship object can be instantiated
describe('Ship', () => {
  it('creates an new object instance', () => {
    const port = new Port('Southampton');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  /* Describe a new port object and instantiate the new Port passing in 'Southampton'
  as its name then pass the new instance into Ship ( the word port is a dependency inversion */
  it('has a starting port', () => {
    const port = new Port('Southampton');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

// Ship is set to sail from port and then to multiple ports in the itinerary
describe('Sail', () => {
  it('setting sail', () => {
    const southampton = new Port('Southampton');
    const rome = new Port('Rome');
    const itinerary = new Itinerary([southampton, rome]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

/* Refactor the Ship test suite so a Ship takes a Port object instead of a string then
 create a new test spec inside Ship.test.js to test a dock method */
describe('Dock', () => {
  it('can dock at a different port', () => {
    const southampton = new Port('Southampton');
    const rome = new Port('Rome');
    const itinerary = new Itinerary([southampton, rome]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toEqual(rome);
  });
});

describe('Sail', () => {
  it('it cannot sail further than its itinerary', () => {
    const southampton = new Port('Southampton');
    const rome = new Port('Rome');
    const itinerary = new Itinerary([southampton, rome]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
