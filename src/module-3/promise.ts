// make Promise 
const makePromise = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const data: string = "data is undefined."
        if (data) {
            resolve(data);
        } else {
            reject("Error");

        }
    })
};

const getPromise = async (): Promise<string> => {
    const data = await makePromise();
    return data
};




/* 

const makePromiseBo = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const data: boolean = true;
        if (data) {
            resolve(data);
        } else {
            reject("data")
        }
    })
};

const getPromiseBo = async (): Promise<boolean> => {
    const data = await makePromiseBo();
    return data
}



// number type promise 
const makePromiseNum = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        const data: number = 10;
        if (data) {
            resolve(data);
        } else {
            reject("Error");
        }
    })
}

const getPromiseNum = async (): Promise<number> => {
    const data = await makePromiseNum();
    return data
} */




// get data type promise
interface IGetDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getDo = async (): Promise<IGetDo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

const getData = async (): Promise<void> => {
    const data = await getDo();
    console.log(data);
}

getData()

type OBJtypes = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const getDataJSON = async (): Promise<OBJtypes> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}
const getPromiseData = async (): Promise<void> => {
    const data = await getDataJSON();
    console.log("data", data);
}
getPromiseData()
