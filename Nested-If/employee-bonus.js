//Employee Bonus Calculator
const prompt = require('prompt-sync')();
let bonus=1000
service=parseInt(prompt("Please enter how many years of service you have "))
if (service>=5){
    bonus=bonus*1.5
    let performance=parseInt(prompt("Please enter your performance rating "))
    if(performance===5){
        bonus=bonus+2000
        let head=prompt("Are you a department head ")
        if(head==="Yes"){
            bonus=bonus*1.25
            console.log("Your final bonus is "+bonus)
        }
        else{
            console.log("Your final bonus is "+bonus)
        }
        }
    else if(performance===4){
        bonus=bonus+1000
        let head=prompt("Are you a department head ")
        if(head==="Yes"){
            bonus=bonus*1.25
            console.log("Your final bonus is "+bonus)
        }
        else{
            console.log("Your final bonus is "+bonus)
        }
    }
    else{
        let head=prompt("Are you a department head ")
        if(head==="Yes"){
            bonus=bonus*1.25
            console.log("Your final bonus is "+bonus)
        }
        else{
            console.log("Your final bonus is "+bonus)
        }
    }
}
else{
    let performance=parseInt(prompt("Please enter your performance rating "))
    if(performance===5){
        bonus=bonus+2000
        let head=prompt("Are you a department head ")
        if(head==="Yes"){
            bonus=bonus*1.25
            console.log("Your final bonus is "+bonus)
        }
        else{
            console.log("Your final bonus is "+bonus)
        }
    }
    else{
        let head=prompt("Are you a department head ")
        if(head==="Yes"){
            bonus=bonus*1.25
            console.log("Your final bonus is "+bonus)
        }
        else{
            console.log("Your final bonus is "+bonus)
        }
    }
        
}