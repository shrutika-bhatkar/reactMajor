import React from 'react';
// import Navber from './DocNavbar';
import DoctorNav from '../Navber/DoctorNav';

import GalleryCarousel from '../GalleryCarousel';


const DocGallery =()=> {
    
   
    
        return ( 
        <div className="bg-dark">
            <DoctorNav />

            <br>
            </br>
            <GalleryCarousel/>
            
            
</div>

);
    }

 
export default DocGallery;