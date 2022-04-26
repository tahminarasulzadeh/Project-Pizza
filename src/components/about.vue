<template>
  <div id="about">
    <div class="container">
      <div class="row text-aligns-center" id="about-first">
        <div class="col-6">
          <h6 id="opening-times" class="mt-5">Opening Times</h6>
          <h3 id="work" class="mt-3">Working Times</h3>
          <p class="mt-3">Monday-Thursday: <span> 7:00 am - 12:00 pm</span></p>
          <p>Friday-Saturday: <span> 7:00 am - Midnight</span></p>
          <p>Saturday-Sunday: <span> 9:00 am - 12:00 pm</span></p>
          <button class="btn">Book a Table</button>
        </div>

        <div class="col-6">
          <img class="mx-3 mt-3" src="../assets/about-1.jpg" alt="img" />
          <img class="mt-3" src="../assets/about-2.jpg" alt="img" />
        </div>
      </div>
      <div class="row text-aligns-center" id="about-first">
        <div class="col-6">
          <img class=" mt-5" src="../assets/about-3.jpg" alt="img" />
          <img class="mt-5 mx-3" src="../assets/about-4.jpg" alt="img" />
        </div>
        <div class="col-6">
          <h6 id="opening-times-story" >The Great Story</h6>
          <h3 id="work-culinary" class="mt-3">Our Culinary Journey</h3>
          <p id="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            iusto officia est odit. Deleniti aliquid accusantium earum vero
            tenetur optio?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#about {
  min-height: 702px;
  background-color: white;
  padding-bottom: 25px;
}
#opening-times {
  color: gray;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.75;
}
#opening-times-story {
  color: gray;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.75;
  margin-top: 100px;
}
p {
  color: dimgray;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 19px;
}
span {
  color: gray;
  opacity: 0.5;
}
.btn {
  background-color: peru;
  color: white;
}
#about-first {
  margin-left: 55px;
}
#work-culinary {
  font-size: 35px;
}
#lorem {
    font-size: 18px;
}
</style>