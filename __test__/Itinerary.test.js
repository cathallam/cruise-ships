// import the constructor file
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

// //  Describe a new Itinerary object and check the new Itinerary object can be instantiated
describe('Itinerary', () => {
  it('creates an new object instance', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  //  Create test spec to check that an itinerary instance can have multiple ports
  it('itinerary can have multiple ports', () => {
    const southampton = new Port('Southampton');
    const rome = new Port('Rome');
    const ports = [southampton, rome];
    const itinerary = new Itinerary(ports);
    expect(itinerary.ports).toEqual(ports);
  });
});
