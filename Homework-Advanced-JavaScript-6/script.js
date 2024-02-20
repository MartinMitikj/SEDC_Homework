function Animal(name, type, age, size) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.size = size;
  this.isEaten = false;

  this.eat = function (isAttacking, targetName, targetSize) {
    if (this.type === "herbivore") {
      console.log(`The animal ${this.name} is a herbivore and does not eat other animals, so it cant eat ${targetName}`);
    } else if (isAttacking) {
      if (this.size < targetSize) {
        console.log(`The animal ${targetName} tried to eat ${this.name} but it did not succeed because ${targetName} was bigger`);
      } else {
        console.log(`The animal ${this.name} ate ${targetName}`);
        this.isEaten = true;
      }
    } else {
      console.log(`The ${this.name} ate ${targetName}`);
    }
  }
}

let Animal1 = new Animal('Parrot', 'Herbivore', 4, 'small');
let Animal2 = new Animal('Racoon', 'Omnivore', 5, 'small');
let Animal3 = new Animal('Bear', 'Carnivore', 3, 'large');
let Animal4 = new Animal('Lion', 'Carnivore', 14, 200);
let Animal5 = new Animal('Rat', 'Omnivore', 14, 250)

Animal1.eat(false, 'Seeds', null);
Animal2.eat(true, 'Grapes', 10);
Animal3.eat(true, 'Rabbit', 5);
Animal4.eat(true, 'Wolf', 300);
Animal5.eat(false, 'Garbage', null);