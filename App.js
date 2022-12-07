import React from 'react';
import {  BrowserRouter ,Route,Routes,Link } from 'react-router-dom';
import './App.css';

import Home from './component/Home/Home';
import About from './component/About/About';
import Gallery from './component/Gallery/Gallery';
import Contact from './component/Contact/Contact';

import AdministratorLogin from './component/Login/AdministratorLogin';
import DoctorLogin from './component/Login/DoctorLogin';
import PatientReg from './component/PatientReg/PatientReg';

import AdHome from './component/Admin/AdHome'
import AdminAbout from './component/Admin/AdminAbout'
import AdminGallery from './component/Admin/AdminGallery';
import AdminContact from './component/Admin/AdminContact';
import AddDoctor from './component/Admin/Admin';
import DoctorReg from './component/DoctorReg/DoctorReg'

import DocHome from './component/Doctor/DocHome';
import DocAbout from './component/Doctor/DocAbout';
import DocGallery from './component/Doctor/DocGallery'
import DocContact from './component/Doctor/DocContact';
import Doctor from './component/Doctor/Doctor'

import PatHome from './component/Patient/PatHome'
import PatientAbout from './component/Patient/PatientAbout'
import PatientGallery from './component/Patient/PatientGallery'
import PatientContact from './component/Patient/PatientContact'
import PatientLogin from './component/Login/PatientLogin';

import PatientHome from './component/Patient/PatientHome'

// import EmployeeLogin from './component/Login/EmployeeLogin';
// import Employee from './component/Employee/Employee'
// import EmpHome from './component/Employee/EmpHome';
// import EmpAbout from './component/Employee/EmpAbout';
// import EmpGallery from './component/Employee/EmpGallery';
// import EmpContact from './component/Employee/EmpContact';

import Complaints from './component/Complaints';

import Navber from './component/Navber/Navber';

import Appointments from './component/Doctor/Apointments';
import View_a from './component/Doctor/viewAppointments';
import View_doctor from './component/Doctor/viewDoctorList';
import View_Patient from './component/Patient/viewPatientsList';
import View_Feedbacks from './viewFeedbacks';
import View_Complaints from './viewComplaints';

function App() {
  return (
    <div className="App">
      {/* <DoctorLogin></DoctorLogin> */}
      {/* <Complaints></Complaints> */}
      {/* { <Doctor></Doctor> } */}
      {/* <Appointments></Appointments> */}
      <AdHome></AdHome>
      {/* <PatHome></PatHome> */}
      {/* <DocHome></DocHome> */}
      {/* <Admin></Admin> */}
      {/* <View_doctor></View_doctor> */}
       {/* <View_a></View_a>  */}
       {/* <View_Patient></View_Patient> */}
       <View_Feedbacks></View_Feedbacks>
       <View_Complaints></View_Complaints>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/gallary' element={<Gallery/>}></Route> */}
          <Route  path="/" element={<Home/>}        />
          <Route path="/About" element={<About />}    />
          <Route path= "/Gallery" element={<Gallery/>}    />
          <Route path="/Contact" element={<Contact/>} />
                  {/* NavDropdown */}
          <Route path="/AdministratorLogin" element={<AdministratorLogin/>} />
          <Route path="/DoctorLogin" element={<DoctorLogin/>} />
          <Route path="/PatientReg" element = {<PatientReg/>}/>
               
                  {/* adminNavbar */}
          <Route path="/AdHome" element = {<AdHome/>}/>
          <Route path="/AdminAbout" element = {<AdminAbout/>}/>
          <Route path="/AdminGallery" element = {<AdminGallery/>}/>
          <Route path="/AdminContact" element = {<AdminContact/>}/>
          <Route path="/DoctorReg" element = {<DoctorReg/>}/>
          
          <Route path="/Admin" element = {<AddDoctor/>}/>
          <Route path="/viewPatientsList" element = {<View_Patient/>}/>
          <Route path="/viewDoctorList" element = {<View_doctor/>}/>



          
            {/* doctor home */}
          <Route path="/DocHome" element = {<DocHome/>}/>
          <Route path="/DocAbout" element = {<DocAbout/>}/>
          <Route path="/DocGallery" element = {<DocGallery/>}/>
          <Route path="/DocContact" element = {<DocContact/>}/>

          <Route path="/Doctor" element = {<Doctor/>}/>
          <Route path="/viewAppoinments" element = {<View_a/>}/>

                {/* patienthome */}
          <Route path="/PatHome" component={<PatHome/>} />
          <Route path="/PatientAbout" component={<PatientAbout/>} />
          <Route path="/PatientContact" component={<PatientContact/>} />
          <Route path="/PatientGallery" component={<PatientGallery/>} />
          <Route path="/PatientLogin" component={<PatientLogin/>} />
          

          <Route path= "/Complaints" element={<Complaints/>}    />
          
          

        </Routes>
        {/* <Link to="/gallary">Gallery</Link> */}
        
        
        
        {/* home */}
        <Link to="/"></Link>
        <Link to="/About"></Link>
        <Link to="/Gallery" element= {< Gallery/>} />
        <Link to=" /Contact" ></Link>
            {/* NavDropdown */}
        <Link to="/AdministratorLogin" ></Link>
        <Link to="/DoctorLogin" ></Link>
        <Link to=" /PatientReg" ></Link>

             {/* adminNavbar */}
        <Link to= "/AdHome" ></Link>
        <Link to= "/AdminAbout" ></Link>
        <Link to= "/AdminGallery" ></Link>
        <Link to= "/AdminContact" ></Link>
        
        <Link to= "/DoctorReg" ></Link>
        <Link to= "/Admin" ></Link>
        <Link to= "/viewAppoinments" ></Link>
        
        <Link to= "/viewPatientsList" ></Link>
        <Link to= "/viewDoctorList" ></Link>




        {/* doctor home */}
        <Link to= "/DocHome" ></Link>
        <Link to= "/DocAbout" ></Link>
        <Link to= "/DocGallery" ></Link>
        <Link to= "/DocContact" ></Link>
        <Link to= "/Doctor" ></Link>
          {/* patienthome */}
        <Link to= "/PatHome" ></Link>
        <Link to= "/PatientAbout" ></Link>
        <Link to= "/PatientContact" ></Link>
        <Link to= "/PatientGallery" ></Link>
        <Link to= "/PatientLogin" ></Link>






        <Link to= "/PatientLogin" ></Link>
        <Link to= "/Complaints" ></Link>

        

      </BrowserRouter>



      
      {/* {/* <Home></Home>
 <PatientReg></PatientReg> */}
     {/* <Navber></Navber> */}
    {/* <Router>

      <Routes>

      <Route  path="/" element={Home} />
      <Route exact path="/About" element={About} />
      <Route exact path="/Gallery" component={Gallery} />
      <Route exact path="/Contact" element={Contact} />
      <Route exact path="/regPatient" component = {PatientReg}/>
      <Route exact path="/patient/login" component={PatientLogin} />
      <Route exact path="/doctors/login" component={DoctorLogin} />
      <Route exact path="/employee/login" component={EmployeeLogin} />
      <Route exact path="/administrator/login" component={AdministratorLogin} />


      <Route exact path="/patient/login/patient_home" component = {PatientHome} />
      <Route exact path="/patient/login/home" element = {PatHome} />
      <Route exact path="/patient/login/about" element = {PatientAbout} />
      <Route exact path="/patient/login/gallery" element = {PatientGallery} />
      <Route exact path="/patient/login/contact" element = {PatientContact} />
     

      
      <Route exact path="/doctors/login/doctor_home" component = {Doctor} />
      <Route exact path="/doctors/login/home" element = {DocHome} />
      <Route exact path="/doctors/login/about" element = {DocAbout}/>
      <Route exact path="/doctors/login/gallery" element = {DocGallery}/>
      <Route exact path="/doctors/login/contact" element = {DocContact}/>


      <Route exact path="/employee/login/employee_home" element = {Employee} />
      <Route exact path="/employee/login/home" element = {EmpHome}/>
      <Route exact path="/employee/login/about" element = {EmpAbout}/>
      <Route exact path="/employee/login/gallery" element = {EmpGallery}/>
      <Route exact path="/employee/login/contact" element = {EmpContact}/>

      <Route exact path="/administrator/login/admin_home" component = {Admin} />
      <Route exact path="/administrator/login/home" element = {AdHome}/>
      <Route exact path="/administrator/login/about" element = {AdminAbout}/>
      <Route exact path="/administrator/login/gallery" element = {AdminGallery}/>
      <Route exact path="/administrator/login/contact" element = {AdminContact}/>
    
      </Routes>
      <Link to={Gallery}>Gallery</Link>
    </Router> */} 
    </div>
  );
}

export default App;
