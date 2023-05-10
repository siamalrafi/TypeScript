"use strict";
// ternary operator
// const age: number = 15;
// if (age >= 18) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
// const isAdult = age >= 18 ? "yes" : "no";
// console.log(isAdult);
// Nullish coalescing operator
// null and undefined
/* const isAuthenticatedUser = null;

const userName = isAuthenticatedUser ?? "Guest"

const age3 = 55;

console.log(age3); */
function foo(input) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else if (Array.isArray(input)) {
        console.log(input.length);
    }
    else {
        console.log("Unknown type");
    }
}
// foo("hello"); // Output: "HELLO"
// foo([1, 2, 3]); // Output: 3
// foo({}); // Output: "Unknown type"
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
