import React, { Component } from 'react'
import axios from 'axios';
import AdminNav from '../Navber/AdminNav';



class DoctorReg extends Component {
 constructor() {
    super()
    this.state = {
      DoctorId:'',
      DoctorFirstName:'',
      DoctorLastName:'',
      Email: 'patient@gmail.com',
      Password: 'P@123',
      Contact:'',
      Gender:'',
      Specialization:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      DoctorId:this.state.DoctorId,
      DoctorFirstName:this.state.DoctorFirstName,
      DoctorLastName:this.state.DoctorLastName,

      Email: this.state.Email,
      Password: this.state.Password,

      Contact:this.state.Contact,
      Gender:this.state.Gender,
      Specialization:this.state.Specialization
    }


    axios.post('/DoctorLogin', {

      DoctorId: user.DoctorId,
      DoctorFirstName: user.DoctorFirstName,
      DoctorLastName: user.DoctorLastName,

      Email: user.Email,
      Password: user.Password,

      Contact: user.Contact,
      Gender: user.Gender,
      Specialization: user.Specialization

    }).then(response => {
      if(response.data === "Email not found") return "Email not found";
      
      sessionStorage.setItem('usertoken', response.data)
      return response.data

    }).then(res => {
      if(res !== "Email not found") {
        sessionStorage.setItem('userData', JSON.stringify(user));
        // this.props.history.push('/patient/login/patient_home');
        this.props.history.push('/component/Patient/Login/PatHome');
      } 
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="body">
      <AdminNav/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Add Doctor...</h1><br></br>
              
              <div className="form-group btn-rg">
                <label htmlFor="DoctorId" >DoctorId</label>
                <input
                  type="number"
                  className="form-control"
                  name="DoctorId"
                  placeholder="Enter your Id"
                  value={this.state.DoctorId}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group btn-rg">
                <label htmlFor="DoctorFirstName" >DoctorFirstName</label>
                <input
                  type="text"
                  className="form-control"
                  name="DoctorFirstName"
                  placeholder="Enter your name"
                  value={this.state.DoctorFirstName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group btn-rg">
                <label htmlFor="DoctorLastName" >DoctorLastName</label>
                <input
                  type="text"
                  className="form-control"
                  name="DoctorLastName"
                  placeholder="Enter your last name"
                  value={this.state.DoctorLastName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group btn-rg">
                <label htmlFor="email" >Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group btn-rg">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                 value={this.state.password}
                  onChange={this.onChange}
                />

              <div className="form-group btn-rg">
                <label htmlFor="Contact" >Contact</label>
                <input
                  type="number"
                  className="form-control"
                  name="Contact"
                  placeholder="Enter your contact number"
                  value={this.state.Contact}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group btn-rg">
                <label htmlFor="Gender" >Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="Gender"
                  placeholder="Enter your Gender"
                  value={this.state.Gender}
                  onChange={this.onChange}
                />
              </div>  

              <div className="form-group btn-rg">
                <label htmlFor="Specialization" >Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  name="Specialization"
                  placeholder="Enter your Specialization"
                  value={this.state.Specialization}
                  onChange={this.onChange}
                />
              </div>  


              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mb-5"
                href = "/DocHome"
              >
                Sign in
              </button>
              
           </form>
          </div>
        </div>
        <div className="reg ml-5"> <h5 className="btn-rg">Don't have any account <a href="/DoctortReg">Register Here</a></h5> </div>
      </div>
      
      {/* <div className="mb-5 mt-5">v</div> */}
      
      </div>  
    )
  }
}
export default DoctorReg;