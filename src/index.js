import "./style.css"
import first from "./images/1.jpg"
import second from "./images/2.jpg"
import third from "./images/3.jpg"
import fourth from "./images/4.jpg"

let nav=document.querySelector(".nav");

    let nav1=document.querySelector(".nav1");
    let nav2=document.querySelector(".nav2");
    let nav3=document.querySelector(".nav3");
    let nav4=document.querySelector(".nav4");

    let arrayOfNavElems=document.querySelectorAll(".navElem");
    let navPanel=document.querySelector(".my-slider");
    let textSlider=document.querySelector(".text-slider");

    nav.addEventListener("click", function(event){
      if(event.target.classList.contains("navElem")) {
        arrayOfNavElems.forEach(elem => elem.classList.remove("active"));
        event.target.classList.add("active");
      }
      if(event.target.classList.contains("nav1")) {
        navPanel.style.left= "0px";
        textSlider.style.left="0px";
      }
      if(event.target.classList.contains("nav2")) {
        navPanel.style.left= "-1000px";
        textSlider.style.left="-200px";
      }
      if(event.target.classList.contains("nav3")) {
        navPanel.style.left= "-2000px";
        textSlider.style.left="-400px";
      }
      if(event.target.classList.contains("nav4")) {
        navPanel.style.left= "-3000px";
        textSlider.style.left="-600px";
      }
    });

let textView= document.querySelector(".text-view");