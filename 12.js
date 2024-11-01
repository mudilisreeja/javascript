let tglbtn=document.createElement("button");
tglbtn.innerText="change mode!";
let body=document.querySelector("body");
body.appendChild(tglbtn);
let currmode="light";
tglbtn.addEventListener("click", () => {
    if(currmode==="light"){
        currmode="dark";
        console.log(body.style.backgroundColor= "black");
    }
      else{
    currmode="light"
    console.log(body.style.backgroundColor= "white");
    }

});

