let btn= document.querySelector(".main");
let body= document.querySelector("body");
let h1= document.querySelector("h1");
let currBg= "light";

btn.addEventListener("click", ()=>{
  if(currBg === "light"){
    btn.innerHTML= "Light";
    currBg= "dark";
    body.style.backgroundColor= "black";
    body.style.color= "white";
    h1.style.fontSize= "50px";

  }
  else{
    currBg = "light";
    btn.innerHTML= "Dark";
    body.style.backgroundColor= "white";
    body.style.color= "black";
    h1.style.fontSize= "60px";

  }
  console.log(currBg);
})

