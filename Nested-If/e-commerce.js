//E-commerce Order Processing
const prompt = require('prompt-sync')();

let stock=prompt("Please enter if the item is in stock Yes or No ")
if (stock==="Yes"){
    let payment=prompt("Please enter your payment method: Paypal/Card ")
    if(payment==="Paypal"){
        let validity=prompt("Is the card valid Yes/No ")
        if(validity==="Yes"){
            let address=prompt("Payment Address Domestic/International ")
            if (address==="Domestic"){
                console.log("Calculating final price")
            }
            else if(address==="International"){
                let supported=prompt("Supported Yes/No ")
                if (supported==="Yes"){
                    console.log("Calculating final price")
                }
                else{
                    console.log("Invalid Support")
                }
            }
        }
        else{
            console.log("Invalid Card")
        }
    }
    else if(payment==="Card"){
        let validity=prompt("Is the card valid Yes/No ")
        if(validity==="Yes"){
            let address=prompt("Payment Address Domestic/International ")
            if (address==="Domestic"){
                console.log("Calculating final price")
            }
            else if(address==="International"){
                let supported=prompt("Supported Yes/No")
                if (supported==="Yes"){
                    console.log("Calculating final price")
                }
                else{
                    console.log("Invalid Support")
                }
            }
        }
        else{
            console.log("Invalid Card")
        }
    }
    else{
        console.log("Invalid Payment Type")
    }
}
else{
    console.log("Item not in stock")
        
}