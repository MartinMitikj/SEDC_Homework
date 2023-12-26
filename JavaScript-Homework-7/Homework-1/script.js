let greet = prompt('What should the dogs greet you with')
class Dog {
  constructor (name,kind) {
    this.name = name;
    this.kind = kind;
  }
  speak (saying) {
    console.log(`The ${this.kind} named ${this.name} is saying ${greet}`)
  }
}
const dog1 = new Dog('Barko','PitBull');
const dog2 = new Dog('Baki','Beagle');
const dog3 = new Dog('Bak','kind');
dog1.speak(greet);
dog2.speak(greet);
dog3.speak(greet);