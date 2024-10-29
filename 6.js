let marks =[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum += val;
}
let avg=sum/marks.length;
console.log(avg);

    
////////////////
let items=[250,645,300,900,50]
let i=0;
for(let val of items){
    console.log(`value of items =${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`);
    i++;
}
///////////////////
let companies = [];
companies.unshift("bloomberg");
companies.push("microsoft");
companies.push("uber");
companies.push("Google");
companies.push("IBM");
companies.push("Netflix");
console.log(companies);
companies.shift();
console.log(companies);
 ///remove uber addind ola   
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);