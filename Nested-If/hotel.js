//Hotel Pricing System
const prompt = require('prompt-sync')();
let price=100
let type=prompt("Enter room type Standard/Deluxe/Suite ")
if (type==="Deluxe"){
    price=price+50
}
if (type==="Suite"){
    price=price+150
}
let season=prompt("Enter season Peak/Regular/Off-peak ")
if (season==="Peak"){
    price=price*1.5
}
else if (season==="Off-peak"){
    price=price*0.8
}
let length=parseInt(prompt("Enter duration of stay in days "))
if (length>=7&&length<14){
    price=price*0.85 
}
else if (length>=14){
    price=price*0.75
}
let loyalty=prompt("Enter loyalty status None/Silver/Gold/Platinum ")
if (loyalty==="Silver"){
    console.log("Free breakfast")
}
else if (loyalty==="Gold"){
    console.log("Free breakfast and room upgrade")
}
else if (loyalty==="Platinum"){
    console.log("Free breakfast, room upgrade, and 10% discount")
    price=price*0.9
}
console.log("Your final price is "+price.toFixed(2))