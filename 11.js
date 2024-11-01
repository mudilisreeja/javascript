//create a button with  inside text and insert it in the first of body tag with background color red
let btn1=document.createElement("button");
btn1.innerText="click me!";
btn1.style.backgroundColor="red";
btn1.style.color="white" ;
document.querySelector("body").prepend(btn1);
//create a paragraph in html give it a class&styling



let para =document.querySelector("p");
para.getAttribute("class");
para.classList.add("newclass");
