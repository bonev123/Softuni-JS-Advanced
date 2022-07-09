class Bank{
    constructor(bankName){
        this._bankName = bankName
        this.allCustomers = []
    }
    newCustomer (customer){
 
        for (const account of this.allCustomers) {
            if(account.personalId ==customer.personalId){
                throw new Error(`${account.name} is already our customer!`)
    }
}
 
 
        this.allCustomers.push({name:`${customer.firstName} ${customer.lastName}`,
        personalId:Number(customer.personalId),
        totalMoney:0,
        transactions:[],
        tCounter:1})
        return `{ firstName: '${customer.firstName}', lastName: '${customer.lastName}', personalId: ${customer.personalId} }` 
    }
 
    depositMoney (personalId, amount){
//         Both the personalId and the amount are numbers.
// Check if the given personalId corresponds to a customer in the customers array, if not throw a new error:
// “We have no customer with this ID!”
let idInList = true;
for (const account of this.allCustomers) {
    if(account.personalId == Number(personalId)){
        // idInList = true
        account.totalMoney +=Number(amount);
        // n. {firstName} {lastName} made deposit of {amount}$!
        let [firstName,lastName] =account.name.split(' ')
        account.transactions.unshift(`${account.tCounter}. ${firstName} ${lastName} made deposit of ${amount}$!`)
        account.tCounter +=1;
        return `${account.totalMoney}$`
    }
 
}
if(idInList){
    throw new Error(`We have no customer with this ID!`)
 }
 
 
// Otherwise add the amount to the corresponding customer in a property named totalMoney and
//  store the transaction information to this customer 
//  (for more clarity see the example below and the hints), 
//  then return the total money of the corresponding customer and a dollar sign:
// “{totalMoney}$”
    }
    withdrawMoney (personalId, amount){
        let idNotInList = true;
        for (const account of this.allCustomers) {
            if(account.personalId == Number(personalId)){
 
                if(account.totalMoney>=Number(amount)){
                    account.totalMoney-=  Number(amount)
        let [firstName,lastName] =account.name.split(' ')
 
                    account.transactions.unshift(`${account.tCounter}. ${firstName} ${lastName} withdrew ${amount}$!`)
                    account.tCounter +=1;
 
                    return `${account.totalMoney}$`
                }
                else{
                    throw new Error(`${account.name} does not have enough money to withdraw that amount!`)
                }
 
            }
        } 
        if(idNotInList){
throw new Error(`We have no customer with this ID!`)
        }
    }
    customerInfo (personalId){
        let idNotInList = true;
 
        for (const account of this.allCustomers) {
            if(account.personalId == Number(personalId)){
 
                let [firstName,lastName] =account.name.split(' ')
               return `Bank name: ${this._bankName}\nCustomer name: ${firstName} ${lastName}\nCustomer ID: ${account.personalId}\nTotal Money: ${account.totalMoney}\nTransactions:\n${account.transactions.join('\n')}` 
 
            }
        } 
        if(idNotInList){
throw new Error(`We have no customer with this ID!`)
        } 
    }
}
 
let bank = new Bank('SoftUni Bank');
 
console.log(bank.newCustomer({firstName:'Svetlin', lastName:'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName:'Mihaela', lastName: 'Mileva', personalId: 4151596}));
 
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);
 
console.log(bank.withdrawMoney(6233267, 125));
 
console.log(bank.customerInfo(6233267));
 