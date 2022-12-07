import React from "react";
import OurDoctors from "../OurDoctors";
// import Navber from './PatientNavbar';
import "../Home/Home.css";
import HomeQuote from "../HomeQuote";
import Homeimage from "../Homeimage";
import Footer from "../Footer";
import Mission from "../Mission";
import PatientNav from "../Navber/PatientNav";


const PatHome = () => {
  return (
    <div className="bg-dark">
      <PatientNav />
      <Homeimage />
      {/* <Mission /> */}
      {/* <br></br> */}
      {/* <br></br> */}
      {/* <h1 className="head text-white" align="center">
        {" "}
        {" "}
      </h1> */}
     
      {/* <br /> */}
      {/* <br /> */}
      {/* <OurDoctors /> */}
      <br></br>
      <br></br>
      <h1 className="text-white" align="center">
        Functions
      </h1>
      <br />
      <br />
      {/* <HomeQuote/> */}

      <div class="row row-cols-1  row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-80 bg-info">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title"> BOOK APPOINTMENT </h5>
              <p class="card-text">
                A patient portal is a website for your personal health care.
              </p>
              <a href="#" class="btn btn-light">
                {" "}
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80 bg-danger">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title"> Appointment Status</h5>
              <p class="card-text">
                A appointments portal is a website for your personal health
                care.
              </p>
             
              <a href="/PatientReg" class="btn btn-primary">
                {" "}
                Appointments List
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default PatHome;
