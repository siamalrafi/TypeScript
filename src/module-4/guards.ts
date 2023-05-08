// alphaneumerical types --

/* type typescheck = string | number;
function addFun1(param1: typescheck, param2: typescheck) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

console.log(addFun1(4, 4));
console.log(addFun1("4", "4")); */



/* // in Guards 

type normalType = {
    name: string,
}
type adminType = {
    name: string,
    status: string,
}

function getUser(user: normalType | adminType): string {
    if ("status" in user) {
        return "I'm a admin."
    }
    else {
        return "I'm a normal user."
    }
}

const normalUser: normalType = { name: "Rana" };
const adminUser: adminType = { name: "Rana", status: "active" };

console.log(getUser(normalUser));
console.log(getUser(adminUser));
 */



// instace of guard
/* 
class Animal {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name} is ${this.age} years old. gender:${this.gender}`;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number, gender: string) {
        super(name, age, gender);
        // this.type = "dog";
    }
    makeBrak() {
        console.log("make brak");
    }
}
class Cat extends Animal {
    constructor(name: string, age: number, gender: string) {
        super(name, age, gender);
        // this.type = "Cat";
    }
    makeCat() {
        console.log("make Cat");
    }
}

function getAnimal(anim: Animal) {
    if (anim instanceof Dog) {
        anim.makeBrak();
    }
    else if (anim instanceof Cat) {
        anim.makeCat();
    }
    else {
        console.log(anim.getInfo());
    }
}

const animal1 = new Dog("Dog", 55, "male");
const animal2 = new Cat("cat", 44, "male")

getAnimal(animal1)
getAnimal(animal2)

 */


class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
        // this.type = "dog";
    }
    makeBrak() {
        console.log("make brak");
    }
}
class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
        // this.type = "Cat";
    }
    makeCat() {
        console.log("make Cat");
    }
}

function getAnimal(anm: Animal) {
    if (anm instanceof Dog) {
        return anm.makeBrak();
    }
    else if (anm instanceof Cat) {
        return anm.makeCat();
    }
    else {
        return anm.getInfo();
    }
}

const animal1 = new Animal("Dog", 4)
const animal2 = new Animal("Cat", 4)


