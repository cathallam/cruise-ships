const Port = require('../src/Port.js');

//  Describe a new Port object and check the new port object can be instantiated
describe('Port', () => {
  it('creates an object instance', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

// A   new test spec to check the new Port object has a name property.
describe('Port', () =>{
  it('name', () => {
    const port = new Port('Rome');
    expect(port.name).toBe('Rome');
  });
});
