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
const friends = ["rana", "maan", "maon"];
const newFriends = ["rana1", "maan1", "maon1"];
friends.push(...newFriends);
