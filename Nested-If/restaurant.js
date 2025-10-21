// Restaurant Bill Calculator
const prompt = require('prompt-sync')();
let bill=parseInt(prompt("Please enter bill amount "))
let rewards=prompt("Do you have a rewards card Yes/No ")

if (bill>50){
    if (rewards==="Yes"){
        bill=bill*0.9
    }
    size=parseInt(prompt("What is the party size "))
    if (size>=6){
        bill=bill*1.18
    }
    else{
        let tip=prompt("Please enter tip amount: 15%, 18%, 20% ")
        if (tip==="15%"){
            bill=bill*1.15
        }
        else if (tip==="18%"){
            bill=bill*1.18
        }
        else if (tip==="20%"){
            bill=bill*1.20
        }
    }
}
else{
    if (rewards==="Yes"){
        bill=bill*0.9
    }
    let tip=prompt("Would you like to give a 15% tip Yes/No ")
    if (tip==="Yes"){
        bill=bill*1.15
    }
}

console.log("Final price is $" +bill.toFixed(2))