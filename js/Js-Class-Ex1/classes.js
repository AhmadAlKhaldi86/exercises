// Create a class called "BankAccount"
// Properties:
//   balance
//   interestRate
// Methods:
//   addInterest() // increases the balance by adding the appropriate interest

class BankAccount {
  constructor(balance, interestRate) {
    this.balance = balance;
    this.interestRate = interestRate;
  }
  addInterest() {
    let newBalance = this.balance * this.interestRate + this.balance);
    console.log(`AccountBalance ${newBalance}`);
  }
}

// create a subclass called "BankAccountWithFee"
// It inherits all the properties and methods from BankAccount
// adds the following. 
// Properties:
//   fee: A fixed dollar amount fee
// Methods:
//   applyFee() // subtracts the fee from the balance

// Create a few instances (a.k.a. objects) of each class, and test them out by calling the methods.


class BankAccountWithFee extends BankAccount {
  constructor(balance, interestRate) {
    super();
    this.balance = balance;
    this.interestRate = interestRate;
    this.fee = 10;
  }
  applyFee() {
    this.balance = this.balance - this.fee;
    console.log(`${this.balance}`);
    
  }
}


// Another Way to call super methods 
// class BankAccount {
//   constructor(balance, interestRate) {
//     this.balance = balance;
//     this.interestRate = interestRate;
//   }
//    addInterest()  {
//      let newBalance = this.balance * this.interestRate + this.balance
//      return newBalance;
//    }
// }

// class BankAccountWithFee extends BankAccount {
//   constructor(balance, interestRate) {
//     super(balance, interestRate)
//     this.fee = 10;
//   }
//    applyFee() {
//     let newBalance = super.addInterest() - this.fee;
//     console.log(`account balance is ${newBalance} dollars`)
//    }
// }

// const AhmadAccountByEndOfMonth = new BankAccountWithFee(100,0.5);
// AhmadAccountByEndOfMonth.applyFee();
