/* class Counter {
    static counter: number = 0;

    // constructor(counter: number) {
    //     this.counter = counter;
    // }

    static increment() {
        return Counter.counter = Counter.counter + 1;
    }
    static decrement() {
        return Counter.counter = Counter.counter - 1;
    }
}


const increment1 = new Counter();
const increment2 = new Counter();

console.log(Counter.increment());
console.log(Counter.increment()); */






// static 

class Tech {
    static counter: number = 0;

    static increment() {
        return Tech.counter = Tech.counter + 1;
    }
    static decrement() {
        return Tech.counter = Tech.counter - 1;
    }
}


const counter1 = new Tech();
const counter2 = new Tech();


console.log(Tech.increment());
console.log(Tech.increment());