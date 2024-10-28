let score = prompt("Enter your score: ");
let grade;
if (score >=90 && score <= 100){
    console.log("gradeA");
}
else if(score <=89 && score >= 70){
    console.log("gradeB");
}
else if(score <= 69 && score >= 60){
    console.log("gradec");
}
else if(score <=59 && score >= 50){
    console.log("grade D");
}
else{
    console.log("FAIL")
}
console.log(score);