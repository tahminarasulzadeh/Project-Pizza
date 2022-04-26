<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { mapGetters } from 'vuex';
</script>

<template>
<div class="general">
    <div class="base">

  <hr />


<nav  id="navbars" class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid">
   
  
      <ul  id="change-color"  class="navbar-nav me-auto mb-2 mb-lg-0">
        <RouterLink class="nav-item" id="navbar-imgs" to="/" tag="li">
          <a class="nav-link active" aria-current="page" href="#">  <img src="./assets/navbar-brands.svg" alt="navbar-img"></a>
        </RouterLink>
          <RouterLink class="nav-item mt-2" tag="li" to="/">
            <a class="nav-link active" aria-current="page" id="item-team" href="#"
              >Home Page</a
            >
            </RouterLink>
          <RouterLink class="nav-item mt-2" to="/about" tag="li">
            <a class="nav-link active" aria-current="page" id="item-about" href="#"
              >About Us</a
            >
          </RouterLink>

          <RouterLink class="nav-item mt-2" tag="li" to="/servise">
            <a class="nav-link active" aria-current="page" id="item-servise" href="#"
              >Our Servise</a
            >
          </RouterLink>

          <RouterLink class="nav-item mt-2" tag="li" to="/team">
            <a class="nav-link active" aria-current="page" id="item-team" href="#"
              >Our Team</a
            >
           
          </RouterLink>
         
                   <RouterLink class="nav-item mt-2" tag="li" to="/testmonials" >
            <a  active-class="active" class="nav-link active" aria-current="page" id="item-team" href="#"
              >Testmonials</a
            >
           
          </RouterLink>
     
       
      </ul>
      <form class="d-flex mt-3">
       <p id="par" >
       <span id="span">  CALL US </span> : (123) 456 7890
       </p>
       
      </form>
    </div>

</nav>

</div>
        


  <RouterView></RouterView>
<footer>
<div>
<nav class="navbar navbar-expand-lg mt-5">
  <div class="container-fluid">
  <ul  id="navbar-two" class="navbar-nav me-auto  mb-lg-0">
        <li class="nav-item " id="navbar-img-2">
          <a class="nav-link active" aria-current="page" href="#">  <img src="./assets/navbar-brands.svg" alt="navbar-img"></a>
        </li>
          <li class="nav-item" id="navbar-img-3">
          <a class="nav-link active" aria-current="page" href="#"> Our Company</a>
        </li>

             <li class="nav-item" id="navbar-img-4">
          <a class="nav-link active" aria-current="page" href="#"> Our Location</a>
        </li>
           <li class="nav-item" id="navbar-img-5">
          <a class="nav-link active" aria-current="page" href="#"> Help Center</a>
        </li>

     
       
      </ul>
  </div>
</nav>

</div>
</footer>
</div>


</template>









 <style>
 nav {
  background-color: darkslategray;
  margin-left: 100px;
  height: 30px;
  
}
a, #item-servise, #item-team {
  text-decoration: none;
  color: white;
}
#item {
  color: white;
}
a:hover {
opacity:0.75;
}
#container {
  background-size: 100%;
}
#item-about{
color: white;

}
#change-color a:focus{
  color: peru;
}

#logo {
  width: 190px;
  height: 200px;
  /* margin-left: 230px; */
}
#li {
  text-decoration: none;

}

body {
  background-color: darkslategray;
}

#navbars {
  background-color: darkslategray;
  height: 50px;
}

#navbar-imgs img {
 width: 110px;
 height: 55px;

}
#navbar-two img {
  margin-right: 700px;
   width: 180px;
 height: 65px;

}
#navbar-two a {
  color: white;
}
#navbar-two li {
 margin-top: 60px;
}
form button {
  margin-right: 50px;
}

 #register {

  color: white;
  
}
#log {
  height: 35px;
  font-size: 15;
}
#par {
  margin-right: 100px;
  color :white
}
#span {
  color: peru;
}
#par, span {
font-size: 15px;
}
</style>