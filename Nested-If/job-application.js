// Job Application Filter
const prompt = require('prompt-sync')();
let degree=prompt("Does candidate have correct degree Yes/No ")
if (degree==="Yes"){
    let exp=parseInt(prompt("How many years experience "))
    if (exp>=2){
        let cert=prompt("Does candidate have certifications Yes/No ")
        if (cert==="Yes"){
            console.log("Strong candidate")
            let relocate=prompt("Is candidate willing to relocate Yes/No ")
            if (relocate==="Yes"){
                console.log("Priority Review")
            }
        }
        else if(exp>=5){
            console.log("Qualified candidate")
            let relocate=prompt("Is candidate willing to relocate Yes/No ")
            if (relocate==="Yes"){
                console.log("Priority Review")
            }
        }
        else{
            console.log("Not qualified")
        }
    }
    else {
        console.log("Entry-level consideration")
    }
}
else {
    console.log("Not qualified")
}