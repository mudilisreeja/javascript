let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText +" from apna college";
console.dir(h2.innertext);

let divs =document.querySelectorAll(".box");
let idx =1;
for(let div of divs){
    div.innerText=`This is a new unique value of ${idx}`;
    idx++;
}
