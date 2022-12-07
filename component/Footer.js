import React from 'react';
// import Complaints from './Complaints';

const Footer =()=> {
    
     
        return (   
          
          <footer className="page-footer font-small   pt-4 bg-info">

  
        <div className="container-fluid text-center text-md-left">
      
          
          <div className="row">
      
            
            <div className="col-md-6 mt-md-0 mt-3">
      
              
              <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
              <p>EMAIL: lifescapehospital@gmail.com</p>
              <p>Phone no: 7686968650</p>

              <button
          type="submit"
          className="btn btn-right "
           href = "/Feedback"
        >
          Feedback
        </button>

       


      
            </div>
            
      
            <hr className="clearfix w-100 d-md-none pb-3"/>
      
            
            <div className="col-md-6 mb-md-0 mb-3">
      
             
              <h5 className="text-uppercase font-weight-bold">Address:</h5>
              <p>  Banerjee Para Pune-490031</p>
      
            </div>


            <button
          type="submit"
          className="btn btn-lg-right  "
          href = "/Complaints"
        >
          Complaints
        </button>
           
      
                           </div>
         
      
                          </div>
        
                      <div className="footer-copyright text-center py-3 default-color-dark">©Copyright:
                          <span> lifescarehospitalLtd.com</span>
                      </div>
        
            </footer>
             );
    }

 
export default Footer;