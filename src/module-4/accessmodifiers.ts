// bank account details
class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(): void {
        console.log(`my balance ${this._balance}`);
    }
    addDeposit(amount: number): number {
        return this._balance += amount;
    }

}


class studentAccount extends BankAccount {
    test() {
        this.getBalance();  // when balance is private
        this.addDeposit(12); // when balance is private
    
        this._balance += 12; // when balance is protected
    
    }
}

const myAccount = new BankAccount(44, "name", 3535)

console.log(myAccount);