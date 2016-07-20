/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

//constructor
var monkey = function(name, species){
  this.name = name,
  this.species = species,
  this.foodsEaten = [],
  this.eatSomething = function(food){
    this.foodsEaten.push(food);
    //console.log(this.iveEaten);
  }
}

var kong = new monkey("king kong", "giant");
var caesar = new monkey("caesar", "ape");
var dunston = new monkey("dunston", "chimp");

kong.eatSomething("banana");
kong.eatSomething("cars");


console.log(kong.foodsEaten);
console.log(caesar);