
//import constructor file
const Ship = require('../src/Ship.js');

//describe the Ship constructor:
describe('Ship', () => {
    it('creates an object instance', () => {
     expect(new Ship()).toBeInstanceOf(Object);
 });
});

//Starting Port
describe('Port', () =>{
    it('has a starting port', () => {
        const ship = new Ship('Southampton');
        expect(ship.port).toBe('Southampton');
    });
});


