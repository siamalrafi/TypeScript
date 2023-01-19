const myFun = (a: string, b: boolean, c?: any): Function => {
    console.log(a + b);
    return c
};



console.log(myFun("3", true, 444));