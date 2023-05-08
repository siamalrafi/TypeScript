class Person {
    takeNap(): void {
        console.log("I'm Person");
    }
}

class Student extends Person {
    takeNap(): void {
        console.log("Student");
    }
}

class Teacher extends Person {
    takeNap(): void {
        console.log("Teacher");
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log("Developer");
    }
}

function getNap(param: Person) {
    param.takeNap()
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Teacher();
const person4 = new Developer();
getNap(person1)
getNap(person2)
getNap(person3)
getNap(person4)