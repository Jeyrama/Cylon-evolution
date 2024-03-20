/*
There are all types of cylons. The trick is, some look like humans. 
Using prototypical inheritance, create a prototype for Cylon. 
Cylons should have a model, and should have an attack function, 
which will return the string "Destroy all humans!"

Since some cylons appear human, then make a child object called HumanSkin. 
This should have a model, as Cylons do, and should have the same attack. 
However, it should also have a function called infiltrate, 
which will return the string "Infiltrate the colonies".
*/


// Solution

let Cylon = function (model){
  this.model = model;
}

Cylon.prototype.attack = function() {
  return "Destroy all humans!";
};

let HumanSkin = function (model) {
  Cylon.apply(this, arguments);
}

HumanSkin.prototype = Object.create(Cylon.prototype);
HumanSkin.prototype.constructor = HumanSkin;
HumanSkin.prototype.infiltrate = function() {
  return "Infiltrate the colonies";
}

// or

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return `Destroy all humans!`;
  };
}

class HumanSkin extends Cylon {
  infiltrate() {
    return `Infiltrate the colonies`;
  };
}