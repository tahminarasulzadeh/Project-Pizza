<template>
  <div class="testmonials">
    <div class="container">
      <p class="text-center">Best Clients</p>
      <h2 class="text-center">Testmonials</h2>
      <div class="row mt-5">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="clients d-flex justify-content-center">
                <img
                  id="client-1"
                  src="../assets/avatar.jpg"
                  alt="avatar-1"
                />
                <div class="infos">
                  <p class="info mt-2"><strong>John Doe</strong></p>
                  <p class="client-info">Business Analyst</p>
                </div>
              </div>
              <p class="lorem-client mt-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos natus nemo! Explicabo consectetur libero repellendus.
              </p>
            </div>
          </div>
        </div>
         <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="clients d-flex justify-content-center">
                <img
                  id="client-1"
                  src="../assets/avatar-1.jpg"
                  alt="avatar-1"
                />
                <div class="infos">
                  <p class="info mt-2"><strong>Marcia Garcia</strong></p>
                  <p class="client-info">Insuarance Agent</p>
                </div>
              </div>
              <p class="lorem-client mt-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos natus nemo! Explicabo consectetur libero repellendus.
              </p>
            </div>
          </div>
        </div>
         <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="clients d-flex justify-content-center">
                <img
                  id="client-1"
                  src="../assets/avatar-2.jpg"
                  alt="avatar-1"
                />
                <div class="infos">
                  <p class="info mt-2"><strong>Mason Miller</strong></p>
                  <p class="client-info">Residental Apprasier</p>
                </div>
              </div>
              <p class="lorem-client mt-3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos natus nemo! Explicabo consectetur libero repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Book a Table -->
      <div class="row tabless">
          <div class="col-6">
              <img src="../assets/contact.jpg" alt="img">
          </div>
         <div class="col-6">
            <form>
             
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name">
                        </div>
                        <div class="form-group mt-3">
                            <input type="tel" class="form-control" name="phone" placeholder="Your Phone">
                        </div>
                        <div class="form-group mt-3">
                            <input type="datetime-local" class="form-control" name="date">
                        </div>
                        <div class="form-group mt-3">
                            <input type="number" class="form-control" name="seats" placeholder="Seats">
                        </div>
                        <button type="submit" class="btn form-control btn-block mt-3">Book A Table</button>
                    
                    </form>
                   
        
          </div>
      </div>
    </div>
  </div>
</template>
 

 <style >
.testmonials {
  background-color: white;
  min-height: 700px;
  width: 100%;
  padding-top: 40px;
  padding-left: 100px;
}
.card {
    width: 380px;
   
}
#client-1 {
  width: 90px;
  height: 90px;
  border-radius: 100px;
}
.clients {
  margin-right: 150px;
}
.info {
  color: black;
}
.infos p {
  font-size: 12px;
  margin-left: 15px;
}
.lorem-client {
    font-size: 12px;
    margin-left: 10px;
}
.tabless {
    margin-top: 130px;
    padding-bottom: 100px;
}
.tabless form {
margin-top: 50px;
margin-right: 50px;
}

</style>