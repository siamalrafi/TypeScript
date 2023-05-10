"use strict";
// normal function
/* function add(num1: number, num2: number): number {
    return num1 + num2;
};

add(4, 56) */
/* const addArrow = (num1: number, num2: number = 4): number => num1 + num2;
console.log(addArrow(5)); */
/*
const arr = [1, 2, 3, 4, 4]

const newArray = arr.map((elem: (number | string)) => console.log(elem))
 */
/*
const person: {
    name: string,
    age: number,
    address: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'John',
    age: 20,
    address: "Dhakari",
    balance: 100,
    addBalance(money: number) {
        console.log(`My money ${this.balance + money}`)
    }
}

console.log(person.addBalance(54)); */
/*
// spreed Operators
const friends: string[] = ["rana", "maan", "maon"]
const newFriends: string[] = ["rana1", "maan1", "maon1"]

friends.push(...newFriends)

console.log(friends);
 */
// rest functions
/* const greedFriend = (...friends: string[]): void => {
    console.log(friends);
    friends.map((friend: string) => console.log(friend));

};

greedFriend("rana", "maan", "maon", "kdfl") */
/* const myFriend = ["rana", "maan", "maon"];
const [besfriend] = myFriend;

console.log(besfriend);

const myBestFriend = {
    fullname: "Abul",
    age: 40
}


const { fullname } = myBestFriend;
console.log(fullname); */
/*
type userType = {
    name: string,
    age: number,
    address: string
    phone?: number
}


const person1: userType = {
    name: "John",
    age: 20,
    address: "Dhakari",
    phone: 1234567890
}
const person2: userType = {
    name: "John",
    age: 20,
    address: "Dhakari",
    phone: 1234567890
}

console.log(person1.name.length);
console.log(person1.name.concat(person2.name).split("n")); */
/* type OperatorsType = (x: number, y: number) => number


const calculate = (num1: number, num2: number, operation: OperatorsType) => {
    return operation(num1, num2);
}

console.log(calculate(1, 2, (x, y) => x + y));

 */
