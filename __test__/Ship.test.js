
//import constructor file
const Ship = require('../src/Ship.js');

//describing the Ship constructor:
describe('Ship', () => {
    it('creates an object instance', () => {
     expect(new Ship()).toBeInstanceOf(Object);
 });
});

//Starting Port constructor
describe('Port', () =>{
    it('has a starting port', () => {
        const ship = new Ship('Southampton');
        expect(ship.port).toBe('Southampton');
    });
});

//Ship is set to sail from port
describe('Sail', () => {
    it('setting sail', () => {
        const ship = new Ship('Southampton');
        //.sailMethod is created
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
}
)
Ship.prototype.setSail = function() {
   
  };

