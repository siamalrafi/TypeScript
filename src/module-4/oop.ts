class Animal {
    name: string;
    age: number;
    weight: number;
    sound: string;
    constructor(name: string, age: number, weight: number, sound: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.sound = sound
    }
    getAnimal() {
        console.log(`${this.name} ${this.age} ${this.weight} and ${this.sound}`);
    }
}
const animal = new Animal("Dogy", 4, 23, "Gau Gau");
animal.getAnimal();
animal.age = 400;
animal.weight = 100;
animal.getAnimal();





