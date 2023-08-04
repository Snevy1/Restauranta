import { menu } from "./menu";
export const careers = () =>{
   const careerInfo = `<div>
   <div class="navigation">
  <ul>
  <li><a href="#" id="home">HOME</a></li>
  <li><a href="#" id="menu">MENU</a></li>
  <li><a href="#" id="products">FEATURED PRODUCTS</a></li>
  <li><a href="">DEALS</a></li>

  
  </ul>
  </div>

   <div class="careers_image">
   <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-nairobi-upper-hill/barlounge/16256-114178-f62751478_3xl.jpg?impolicy=GalleryLightboxFullscreen">
   <h2 class="careersheader">CAREERS</h2>
   
   </div>
   <div class="careers_main">
   <h1>JOIN THE CREW.</h1>
   <p>We are always looking for eager, hard working people with exciting personalities, a passion for superb service and an eye for detail.</p>
   <p>We offer flexible hours, hands on training, competitive wages and staff incentives. CJ’s is always accepting applications for all positions and we believe that every person that comes
    through our front door looking for work deserves a moment of our time.</p>
    <P>Please feel free to drop by any of our locations any day of the week between 9:00am and 4:00pm to speak with a manager or just fill in the form below with your data and 
    position you’re applying for.</p>
    <form>
    <div class="form_info">
    <div class="user_info">
    <label for="name">Full Name:</label>
    <input type="text" id="name" placeholder ="Enter Full Name">
    <label>Email Address</label>
    <input placeholder ="Enter Email Address">
    </div>
    
    <div>
    <legend>Position</legend>
    <select>
    <option>Barista</option>
    <option>Chef</option>
    <option>Sous Chefs</option>
    <option>Chefs de partie</option>
    <option>Commi 1</option>
    <option>Commi 2</option>
    <option>Commi 3</option>
    <option>Kitchen Staff</option>
    <option>Waiter/waitresses</option>
    <option>Other</option>
    </select>
    <div class="resume_sect">
    <h2>Resume</h2>
    <p>Select a file smaller than 75 kB :</p>
    <input type="file" id="FS" />
    </div>
    </div>
    </div>

    <input type="button" value="Submit">
    


    </form>
   
   </div>
   
   </div>`

   return careerInfo;
}

/* export const menunavigation = () =>{

   let menunav = `<div class="navigation">
   <ul>
   <li><a href="#" id="home">HOME</a></li>
   <li><a href="#" id="menu">MENU</a></li>
   <li><a href="#" id="products">FEATURED PRODUCTS</a></li>
   <li><a href="">DEALS</a></li>
 
   
   </ul>
   </div>`;
   return menunav;


} */