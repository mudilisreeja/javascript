
let newbtn=document.createElement("button");
let div=document.querySelector("div");
newbtn.innerText="clickme!";
//div.append(newbtn);
//div.prepend(newbtn);
//div.before(newbtn);
div.after(newbtn);
let para=document.createElement("p");
para.innerHTML= "<i>This is single line</i>";
document.querySelector("body").append(para);
para.remove();