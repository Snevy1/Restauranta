import { home } from "./home";
import { displayimage, cards,menuimages } from "../displayimage";
import { breakFast } from "./breakfast";
import { bigMeals } from "./bigmeals";
import { perfectedDrinks } from "./perfecteddrinks";
import { desserts } from "./desserts";
import { featuredProducts } from "./featuredproducts";



export const restmenu = () =>{
  let element =  `<div class="menu">
  <div class="navigation">
  <ul>
  <li><a href="#" id="home">HOME</a></li>
  <li><a href="#" id="menu">MENU</a></li>
  <li><a href="#" id="products">FEATURED PRODUCTS</a></li>
  <li><a href="">DEALS</a></li>

  
  </ul>
  </div>
  <main class="mainmenu" id="mainmenu">
  <h1>Welcome to Kingangi's!!</h1>
    <p>Welcome to Kingangi's delicious universe. Everything from our Big on Breakfast, Perfected Drinks, 
    Decadent to your Generous Big Meals Right here at your fingertips. ORDER NOW.</p>
    <div class="menuimages">
    <div>
    <img id="foods" class="images">
    <h1><a href="#" id="breakfast" class="meals">BIG ON BREAKFAST</a></h1>
    </div>
    <div><img id="foods2" class="images">
    <h1><a href="#" id="bigmeals" class="meals">GENEROUS BIG MEALS</a></h1></div>
    <div><img id="foods3" class="images">
    <h1><a href="#" id="drinks" class="meals">PERFECTED DRINKS</a></h1></div>
    <div><img id="foods4" class="images">
    <h1><a href="#" id="desserts" class="meals">DECADENT DESSERTS</a></h1></div>
    
    </div>
  
  </main>

    
    
    
    
    </div>`

    document.getElementById("main").innerHTML = element;

  const home1 = document.getElementById("home");
  const breakfast = document.getElementById("breakfast");
  const bigmeals = document.getElementById("bigmeals");
  const drinks = document.getElementById("drinks");
  const menu1 = document.getElementById("menu");
  const desserts1= document.getElementById("desserts");
  const featured = document.getElementById("products");

  home1.addEventListener("click", (event) =>{
    event.preventDefault();
    home();
    displayimage();
    cards();
    
    
    
  });

  breakfast.addEventListener("click", () =>{
    document.getElementById("mainmenu").innerHTML = breakFast();


  });

  bigmeals.addEventListener("click", ()=>{
    document.getElementById("mainmenu").innerHTML = bigMeals();

  });

  
    drinks.addEventListener("click", () =>{
      document.getElementById("mainmenu").innerHTML = perfectedDrinks();

    });

    desserts1.addEventListener("click", ()=>{
      document.getElementById("mainmenu").innerHTML = desserts();

    });

    featured.addEventListener("click", ()=>{
      document.getElementById("mainmenu").innerHTML = featuredProducts ();

    });


  
   menu1.addEventListener("click", ()=>{
    restmenu();
    menuimages();
   })

  

   
    return element
  
  
 
 
}

