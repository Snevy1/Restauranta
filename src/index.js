
import "./index.css"
import "./styles/menu.css";

import { displayimage, menuimages } from "./displayimage";

window.addEventListener('load', ()=> {
  
   displayimage();
   
});


export const  swiper = new Swiper('.swiper', {
  loop: true,                         
    effect: "cube",                     //add(make slider cube
    grabCursor: true,                   //add(grab cursor
    speed: 2000,                        //add(slide speed
    autoplay: {                         
        delay: 1000,  
    },             
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });







 /* const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
 */






