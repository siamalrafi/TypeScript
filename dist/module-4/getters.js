"use strict";
// // bank account details
// class BankAccount {
//     public readonly id: number;
//     public name: string;
//     protected _balance: number;
//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     // getter 
//     get balance(): number {
//         return this._balance;
//     }
//     getBalance(): number {
//         return this._balance;
//     }
//     // setter 
//     set deposit(amount: number) {
//         this._balance = this._balance + amount;
//     }
//     // addDeposit(amount: number): number {
//     //     return this._balance += amount;
//     // }
// }
// class studentAccount extends BankAccount {
//     test() {
//         // this.getBalance();  // when balance is private
//         // this.addDeposit(12); // when balance is private
//         this._balance += 12; // when balance is protected
//     }
// }
// const myAccount = new BankAccount(44, "name", 30030)
// console.log(myAccount.balance);
// myAccount.deposit = 4444444444;
// console.log(myAccount.balance);
