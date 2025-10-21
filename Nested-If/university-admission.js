//University Admission System
const prompt = require('prompt-sync')();
let gpa=parseInt(prompt("Please enter GPA "))
if (gpa>=3){
    let sat=parseInt(prompt("Please enter SAT score "))
    if (sat>=1200){
        let extra=prompt("In extracirricular Yes/No ")
        if (extra==="Yes"){
            let lead=prompt("In leadership role Yes/No ")
            if (lead==="Yes"){
                console.log("Admitted with Honors")
            }
            else{
                console.log("Admitted")
            }
        }
        else if (sat>=1400){
            console.log("Admitted on probation")
        }
        else{
            console.log("Rejected: SAT too low and no extracurriculars")
        }
    }       
}
else{
    console.log("Rejected: GPA too low")
}