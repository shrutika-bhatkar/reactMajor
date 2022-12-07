import React from "react";
import OurDoctors from "../OurDoctors";
// import Navber from './AdminNavbar';
import "../Home/Home.css";
import Homeimage from "../Homeimage";
import Footer from "../Footer";
// import HomeQuote from "../HomeQuote";
import Mission from "../Mission";
import AdminNav from "../Navber/AdminNav";

const AdHome = () => {
  return (
    <div className="bg-dark">
      <AdminNav />
      <Homeimage />
      <Mission />
      <br></br>
      <br></br>
      <h1 className="head text-white" align="center">
        {" "}
        Our Doctors{" "}
      </h1>
      <br></br>
      <br></br>
      <br />
      <br />
      <OurDoctors />
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
              <h5 class="card-title"> View All Patient </h5>
              <p class="card-text">
              A patient portal is a website for your personal health care.
              </p>
              <a href="/viewPatientsList" class="btn btn-light"> Get Patients List</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80 bg-danger">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title"> View All Doctors</h5>
              <p class="card-text">A doctor portal is a website for your personal health care.</p>
              <a href="/viewDoctorList" class="btn btn-primary"> Get Doctors List</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80 bg-warning">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title">Add  Your Doctors</h5>
              <p class="card-text">
                You add  doctors  for your hospital here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              </p>
              <a href="/Admin" class="btn btn-light">Add doctor</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80 bg-success">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title">View Complaints</h5>
              <p class="card-text">
             You can see all the complaints raised  for your system here!
              </p>
              <a href="#" class="btn btn-primary">Check Complaints</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-80 bg-info">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title">View Feedbacks</h5>
              <p class="card-text">
              You can see all the feedbacks by patients  for your system here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              <a href="#" class="btn btn-light">Check Feedback</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default AdHome;
