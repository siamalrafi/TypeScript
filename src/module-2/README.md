This is the README file of this folder that is learn from here. I try to note this all important things about TypeScript.

# Main Topics:
1. Array and Tuples in typescript
2. Object, Literal Types and Optional types
3. 


* Array and Tuples in typescript: Array is a normal array type like JavaScript array. It's allow to declare multiple values with there types. It can be string, number and boolean types. On the other hand, Tuple almost similar to Array but there are one different. In tuples, we should declare with the index where will be string, number and boolean.
```bash
// Array and Tuples in typescript

let myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let myArray1: Array<string> = ["name", "age", "gender"];

myArray.map((a)=>console.log(a))

// Tuple in TypeScript

let myTuple: [string, number, boolean] = ["Male", 45, true]
```


**-** Object, Literal Types and Optional types ---


**Object:**=> Object is a normal type of TypeScript object. that can be used to declare multiple value for uses. Literal types are very interesting 

Literal types=> It's allowed to declare a type with some selected value. then this can't be changed.

Optional types=> It's allowed to use a types that will be optional. You can be use this type of not it's declare with question mark (?).

```bash
// Object Types
type Person = {
  name: string;
  age: number;
  address?: { 
    street: string;
    city: string;
    state: string;
  }; // optional types
};

let person: Person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  } // nothing will occurred if you not use it.
};

// Literal types
type YesNo = 'yes' | 'no';
let answer: YesNo = 'yes'; // this is valid
let answer2: YesNo = 'maybe'; // this is invalid


```