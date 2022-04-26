<script setup>
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";
</script>

<template>
  <div class="home">
  


  <!-- HOME PAGE -->
  <div id="home">
    <div class="header">
      <img
        id="logo"
        class="justify-content-center"
        src="../assets/logo.svg"
        alt="logo"
      />
      <p class="header-item text-center">Welcome To Our Restaurant</p>
      <h1 class="header-item text-center">Really Fresh & Tasty</h1>
      <button id="button" class="btn header-item text-center">
        Book Table
      </button>
    </div>

  </div>
  </div>
</template>

<style >
.home {
  min-height: 650px;
}
#home {
  margin-top: 0;
  display: flex;
  justify-content: center;
}
.header-item {
  color: white;
}

#comp-button {
  background-color: peru;
  color: white;
  width: 90px;
  height: 35px;
  font-size: 12px;
  margin-right: 150px;
}
#comp-button:hover {
  color: black;
}
p {
  font-size: 25px;
  /* margin-left: 50px; */
}
h1 {
  font-size: 80px;
  /* text-align: center; */
}
#home {
 
position :relative;
width: 100%;
  min-height: 623px;
  
  background-image: url("../assets/header.jpg");
 
  /* padding-bottom: 245px; */
  /* opacity: 0.75; */
  background-repeat: no-repeat;
  background-size: cover;
}
.header {
position: absolute;

  left: 0;
  top: 0;  
  width: 100%;
  min-height: 654px;
  background: rgba(33, 37, 41, 0.85);
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
#button {
  /* margin-left: 270px; */
  background-color: peru;
}
</style>