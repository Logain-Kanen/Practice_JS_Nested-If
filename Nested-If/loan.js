//Loan Eligibility Checker
const prompt = require('prompt-sync')();
let age=parseInt(prompt("Please enter your age "))

if(age>=21){
    let income=parseInt(prompt("Please enter your income "))
    if (income>=30000){
        let score=parseInt(prompt("Please enter your credit score "))
        if (score>=650){
            console.log("You have been approved")
        }
        else{
            console.log("You are ineligeble: credit score too low")
        }
    }
    else{
        console.log("You are ineligeble: income too low")
    }
}
else{
    console.log("You are ineligeble: too young")
}