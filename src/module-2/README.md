This is the README file of this folder that is learn from here. I try to note this all important things about TypeScript.

# Main Topics:
* Array and Tuples in typescript
* 
* 


### Array and Tuples in typescript: Array is a normal array type like JavaScript array. It's allow to declare multiple values with there types. It can be string, number and boolean types. On the other hand, Tuple almost similar to Array but there are one different. In tuples, we should declare with the index where will be string, number and boolean.
```bash
// Array and Tuples in typescript

let myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let myArray1: Array<string> = ["name", "age", "gender"];

myArray.map((a)=>console.log(a))

// Tuple in TypeScript

let myTuple: [string, number, boolean] = ["Male", 45, true]
```