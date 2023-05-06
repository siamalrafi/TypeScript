interface User {
    name: string;
    email: string;
    age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    console.log("object");
    return obj[key];

}
const user: User = {
    name: "John",
    email: "john@example.com",
    age: 30
};


const email = getProperty(user, "email"); // Type: string
