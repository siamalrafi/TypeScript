/* // types assertions --
let x: any = "Hello, world!";
let len1 = (<string>x).length; // using angle-bracket syntax
let len2 = (x as string).length; // using "as" keyword

console.log(len1);
console.log(len2); */




/* // Interface, Type vs Interface

// interface only used for Object types -
interface OBJ {
    x: number;
    y: number;
    z?: number;
}


// type can be used for any types
type OBJ2 = {
    x: number;
    y: number;
    z?: number;
}
 */



// Introduction of Generic in Type


type GENER<T> = Array<T>;


const x: GENER<string> = ["name", " age"]
function SUM(x: GENER<number>, y: GENER<number>) {
    const m = x.reduce((a, b) => a + b, 0)
    const n = y.reduce((a, b) => a + b, 0)
    return m + n;
}

console.log(SUM([2, 3, 4, 5], [44, 5, 55, 56,]));

