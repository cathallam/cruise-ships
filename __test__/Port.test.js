const Port = require('../src/Port.js');

//  Describe a new Port object and check the new port object can be instantiated
describe('Port', () => {
  it('creates an object instance', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  // A  new test spec to check the new Port object has a name property.
  it('name', () => {
    const port = new Port('Rome');
    expect(port.name).toBe('Rome');
  });
});

// Port addShip Method to keep track of ships so that we can add more ships using an array
it('add new ship', () => {
  const port = new Port('Southampton');
  const ship = {};
  port.addShip(ship);
  expect(port.ships).toContain(ship);
});

// Port removeShip method to keep track of ships not sailing
it('remove ship', () => {
  const port = new Port('Southampton');
  const cunard = {};
  const seabourn = {};
  port.addShip(cunard);
  port.addShip(seabourn);
  port.removeShip(seabourn);
  expect(port.ships).toEqual([cunard]);
});
