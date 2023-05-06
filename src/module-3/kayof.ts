interface User {
    name: string;
    email: string;
    age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];

}
const user: User = {
    name: "John",
    email: "john@example.com",
    age: 30
};


const name = getProperty(user, "name"); // Type: string
const email = getProperty(user, "email"); // Type: string
const age = getProperty(user, "age"); // Type: number
const invalid = getProperty(user, "invalid"); // Compile-time error: Argument of type '"invalid"' is not assignable to parameter of type '"name" | "email" | "age"'
