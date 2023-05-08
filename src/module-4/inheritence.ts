class PARENT {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getInfo() {
        console.log(`${this.name}: ${this.age}, ${this.gender}`);
    }
}


class Student extends PARENT {
    status: string;

    constructor(name: string, age: number, gender: string, sexy: string) {
        super(name, age, gender);
        this.status = sexy;
    }

    tech(perspus: string) {
        super.getInfo();
        console.log(`${this.name}: ${this.age}, ${this.gender}, ${this.status} ==${perspus}`);
    }

}

let student = new Student('John', 20, 'male', 'math');

student.getInfo();
student.age = 20000;
student.status = "active"
student.getInfo();
student.tech("be honest");

/* class Teacher extends PARENT {
    subject: string;
    constructor(name: string, age: number, gender: string, subject: string) {
        super(name, age, gender)
        this.subject = subject
    }
    teach(clessOfNumber: number) {
        console.log(`${this.name} teaches ${this.subject} ${clessOfNumber}`);
    }
}

let teacher = new Teacher('John', 20, 'male', 'math');
teacher.getInfo();
teacher.age = 4400;
teacher.getInfo();
teacher.teach(10);

 */

