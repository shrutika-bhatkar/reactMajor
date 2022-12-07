import React from 'react';
import HomeQuote from '../HomeQuote';
// import Navber from './DocNavbar';
import '../Home/Home.css';

import Homeimage from '../Homeimage'
import OurDoctors from '../OurDoctors'
import Footer from '../Footer';
import Mission from '../Mission';
import DoctorNav from '../Navber/DoctorNav';

const DocHome =()=> {
    
        return (
            <div className="bg-dark">
                <DoctorNav />
                {/* <Homeimage/> */}
                {/* <Mission/> */}
                <br>
                </br>
                <br>
                </br>
                <h1 className="head text-white" align="center"> Our Doctors </h1>
                <br/>
                <br/>
                <OurDoctors/>
                <br></br>
                <br></br>
                <h1 className="text-white" align="center">Functions</h1>
                <br/>
                <br/>
                {/* <HomeQuote/> */}

                <div class="row row-cols-1  row-cols-md-1 g-4">
        <div class="col">
          <div class="card h-80 bg-info">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div class="card-body">
              <h5 class="card-title"> VIEW APPOINTMENTS </h5>
              <p class="card-text">
                A patient portal is a website for your personal health care.
              </p>
              <a href="/viewAppoinments" class="btn btn-light">
                {/* {" "} */}
                View Appointment
              </a>
            </div>
          </div>
        </div>
        </div>








                <br/>
                <br/>
                <Footer/>
               
            </div>
        );
    }


export default DocHome;