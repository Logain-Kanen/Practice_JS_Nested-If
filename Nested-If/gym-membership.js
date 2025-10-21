// Gym Membership Pricing
const prompt = require('prompt-sync')();
let fee=50
let type=prompt("Please enter membership type Basic/Premium/VIP ")
if (type==="Premium"){
    fee=fee+30
    console.log("Includes group classes")
}
else if (type==="VIP"){
    fee=fee+70
    console.log("Includes personal trainer")
}
let age=parseInt(prompt("Enter your age "))
if (age<=25){
    fee=fee*0.80
}
let total=fee*12
let annual=prompt("Annual contract Yes/No ")
if (annual==="Yes"){
    total=total-(fee*2)
    if (type==="Premium"||type==="VIP"){
        console.log("Free gym bag")
    }
}
console.log("Your fee per month is "+fee+" and your price for a full year is "+total)