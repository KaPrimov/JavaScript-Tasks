let WaterTurtle  = require('./waterTurtle').WaterTurtle;
let GalapagosTurtle = require('./galapagusTurtle').GalapagosTurtle;
let EvkodianTurtle = require('./evkodianTurtle').EvkodianTurtle;
let NinjaTurtle = require('./ninjaTurtle').NinjaTurtle;
let Turtle = require('./turtle').Turtle;

result.WaterTurtle = WaterTurtle;
result.GalapagosTurtle = GalapagosTurtle;
result.EvkodianTurtle = EvkodianTurtle;
result.NinjaTurtle = NinjaTurtle;
result.Turtle = Turtle;

let testWaterTurtle = new WaterTurtle("Michelangelo", 18, "male", "Sewer");
let testGalapagosTurtle = new GalapagosTurtle("Raphael", 18, "male");
let testEvkodianTurtle = new EvkodianTurtle("Donatello", 18, "male", 100);
let testNinjaTurtle = new NinjaTurtle("Leonardo", 18, "male", "Blue", "Yamato");
testNinjaTurtle.grow(5);
console.log(testNinjaTurtle.age);
console.log(testGalapagosTurtle.toString());
console.log(testEvkodianTurtle.toString());
console.log(testWaterTurtle.toString());
