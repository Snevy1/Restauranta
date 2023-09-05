import { home } from "./app/home";
home();
import restaurant from "./assets/images1/restaurant.jpg";
import restaurant2 from "./assets/images1/restaurant2.jpg";
import restaurant3 from "./assets/images1/restaurant3.jpg";
import giftcard from "./assets/images1/gift-card-home.jpg";
import { restmenu } from "./app/menu";
import homecard from "./assets/images1/home-page-superfoods-brand-new.jpg";
import foods from "./assets/images1/foods.jpg";
import foods2 from "./assets/images1/foods2.jpg";
import foods3 from "./assets/images1/foods3.jpg";
import foods4 from "./assets/images1/foods4.jpg";
import "index.css";
import "style.css";

export const displayimage = ()=>{

   
    let images = [restaurant, restaurant2, restaurant3];
   
   
   
   
   
   const image1 = document.getElementById("img1");
   const image2 = document.getElementById("img2");
   const image3 = document.getElementById("img3");
   //const image4 = document.getElementById("img4");
   image1.src = images[0];
   image2.src = images[1];
   image3.src = images[2];
   //image4.src = images[3];
   
    //let counter = 0;
   
    
    
    
    
    } 

   export const cards = ()=>{
     const card1 = document.getElementById("card1");
   const card2 = document.getElementById("card2");
   
   card1.src = giftcard;
   card2.src = homecard;
   
   
   }
   cards();
   
   
   
   
   export const menuimages = () =>{
   
     restmenu();
   
   const image1 = document.getElementById("foods");
   const image2 = document.getElementById("foods2");
   const image3 = document.getElementById("foods3");
   const image4 = document.getElementById("foods4");
   
     
   
   
     
   
     image1.src = foods;
     image2.src = foods2;
     image3.src = foods3;
     image4.src = foods4;
   
     
   
   }
   
  




