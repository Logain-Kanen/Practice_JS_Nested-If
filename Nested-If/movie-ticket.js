// Movie Ticket Pricing
const prompt = require('prompt-sync')();
let day=prompt("Please enter what day it is ")

if(day==="Sunday"||day==="Saturday"){
    let time=parseInt(prompt("Please enter the movie hour 1-24 "))
    if (time>=17&&time<=24){
        let age=parseInt(prompt("Please enter your age "))
        if (age>=65){
            console.log("Your ticket price is $12")
        }
        else{
            console.log("Your ticket price is $15")
        }
    }
    else if (time>=1&&time<=16){
        let age=parseInt(prompt("Please enter your age "))
        if (age>=65){
            console.log("Your ticket price is $8")
        }
        else{
            console.log("Your ticket price is $10")
        }
    }
    else{
        console.log("Ineligible time")
    }
}
else{
    let age=parseInt(prompt("Please enter your age "))
    if (age>=65){
    console.log("Ticket price is $6.40")
    }
    else{
        console.log("Ticket price is $8")
    }
    
}