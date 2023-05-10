"use strict";
// make Promise 
// const makePromise = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const data: string = "data is undefined."
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Error");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getDo();
    console.log(data);
});
getData();
const getDataJSON = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getDataJSON();
    console.log("data", data);
});
getPromiseData();
