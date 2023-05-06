interface MAN<T, M> {
    name: string;
    email: string;
    age: T;
    gender?: M
};


const OBJECT: MAN<{ first: number, second: number }, { first: string, second: boolean }> = {
    name: "John",
    email: "ychag@example.com",
    age: {
        first: 4,
        second: 5
    },
    gender: {
        first: "male",
        second: true,
    }
}

console.log("object");
console.log("object");

let person: MAN<number, string> = {
    name: "John",
    email: "ychag@example.com",
    age: 20,
    gender: "male"
};


let person2: MAN<boolean, string> = {
    name: "John",
    email: "ychag@example.com",
    age: true,
    gender: "male"
}

console.log(person2.age);