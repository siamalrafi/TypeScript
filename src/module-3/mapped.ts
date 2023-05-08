function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}



const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'))