// Insurance Premium Calculator
const prompt = require('prompt-sync')();
let premium=1000
let age=parseInt(prompt("Please enter your age "))
if (age<25){
    premium=premium+500
    let accidents=prompt("Any accidents Yes/No ")
    if (accidents==="Yes"){
        premium=premium+300
    }
}
else{
    let exp=parseInt(prompt("How many years of experience "))
    if (exp>=5){
        let accidents=prompt("Any accidents Yes/No ")
        if (accidents==="No"){
            premium=premium-150
        }
    }
    else{
        premium=premium+200
    }
}
if (premium>1500){
    let multi=prompt("Do you have multiple cars Yes/No ")
    if (multi==="Yes"){
        premium=premium*0.9
    }
}
console.log("Your final premium is $"+premium.toFixed(2))