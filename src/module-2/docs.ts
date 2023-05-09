
/* // function -- 
 function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4))// 10 */

/* // spreed operator --
let num1:number[]=[1,2,3,4,5];
let num2:number[]=[...num1,34,12,53]; // it just copy num1 
console.log(num1);
console.log(num2); */


/* // rest operators --

function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0)
}
console.log(sum(3,4,5,6));
 */


/* // Default Parameters
function addValue(a: number, b: number = 40): number {
    return a + b;
}
console.log(addValue(4));
 */


/* //  Destructuring
const person: { name: string, age: number } = { name: "John", age: 30 };
const { name, age } = person;

console.log(name); // "John"
console.log(age); // 30 */


// Type alias and optional types
// Type alias --
/* type NumberToStringFunc = (num1: number, num2: number) => string;

// optional Types
function greet(name?: string) {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello!';
    }
} */




