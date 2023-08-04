import { menuimages } from "../displayimage";
import { careers } from "./careers";
import { displayimage } from "../displayimage";
import { cards } from "../displayimage";
import { featuredProducts } from "./featuredproducts";
import { restmenu } from "./menu";
import { swiper } from "./swiper1";



export  const home = ()=>{
    const homeEl =
     `<section id="main">
    
    <div class="container">
        <h1 class="title">KINGAN'GI RESTAURANT</h1>
        <div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide"><img id="img1"></div>
    <div class="swiper-slide"><img id="img2"></div>
    <div class="swiper-slide"><img id="img3"></div>
    
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
        
        <div  class="cta">
            <h1>KING'ANGI</h1>
            <ul>
                <li><a href="#" id="menu">MENU</a></li>
                <hr></hr>
                <li><a href="#footer">LOCATIONS</a></li>
                <hr></hr>
                <li><a href="#" id="careers">CAREERS</a></li>
                <hr>
                <li><a href="#">FEEDBACK</a></li>
                <hr>
                <li><a href="#">ABOUT US</a></li>
                <hr id="b1">
            </ul>
    
        </div>
  
  
    </div>
    
    

    <div class="scroll1">
    <div class="sect2">
    
        <div class="slide1">
            <img id="card1">
  
        </div>
        <div class="slide2">
            <img  id="card2">
  
        </div>
  
    </div>

    </div>
  
    

</section>




<div class="scroll">
<footer id="footer">
  <div class="footer">
      <div>
          <h1>CONTACT US - 0746358820</h1>
          <h1>LOCATIONS</h1>
          <p>Kilimani</p>
          <p>Koinange Street</p>
          <p>Village Market</p>
          <p>The Waterfront Mall Karen</p>
          <p>The Imaara Mall</p>
      </div>
      <div>
          <h1>OUR MENU</h1>
          <p>BREAKFAST</p>
          <p>DRINKS</p>
          <p>MAINS</p>
          <p>DESSERT</p>
      </div>

  </div>

  <div>
      <p>We're commited to great food, great coffee, great service, an experience that will make your time with us fabulous.
           All visuals are serving suggestions only</p>
           <p>Prices are quoted in Kenyan Shillings and inclusive of VAT.</p>
  </div>
</footer>
</div>`
document.getElementById("body").innerHTML = homeEl;

const menu = document.getElementById("menu");
  menu.addEventListener("click", (event) =>{
   event.preventDefault();
   
   menuimages();});
   const careers1 = document.getElementById("careers");
     careers1.addEventListener("click", () =>{
        document.getElementById("main").innerHTML =  careers();
        const menu = document.getElementById("menu");
  menu.addEventListener("click", (event) =>{
   event.preventDefault();
   
   menuimages();});

   const home1 = document.getElementById("home");
   home1.addEventListener("click", (event) =>{
    event.preventDefault();
    home();
    displayimage();
    cards();
  });
  const featured = document.getElementById("products");
  featured.addEventListener("click", ()=>{
    restmenu();
    
    document.getElementById("mainmenu").innerHTML =  featuredProducts ();

  });


     });

     

     //scroll js;
     
     

     

  

return homeEl;

}

//scroll

window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".scroll");
    
    for (let i =0; i <reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 200;

        if(revealtop < windowheight- revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');

        }


    }
 }

 //swiper js

 
  
  

 


