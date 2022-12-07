import React, { Component } from "react";
import axios from "axios";

class Complaints extends Component {


constructor() {
  super()
  this.state = {
    
    FirstName:'',
    LastName:'',
    Contact:'',
    Email:'',
    Problem:'',
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
   
    FirstName: this.state.FirstName,
    LastName: this.state.LastName,
    Contact: this.state.Contact,
    Email: this.state.Email,
    Problem: this.state.Problem,

  }


  axios.post('/DoctorLogin', {

    
    FirstName: user.FirstName,
    LastName: user.LastName,
    Contact: user.Contact,
    Email: user.Email,
    Problem: user.Problem,

  })
  // .then(response => {
  //   if(response.data === "Email not found") return "Email not found";
    
  //   sessionStorage.setItem('usertoken', response.data)
  //   return response.data

  // })
  // .then(res => {
  //   if(res !== "Email not found") {
  //     sessionStorage.setItem('userData', JSON.stringify(user));
  //     // this.props.history.push('/patient/login/patient_home');
  //     this.props.history.push('/component/Patient/Login/PatHome');
  //   } 
  // })
  // .catch(err => {
  //   console.log(err)
  // })
}

// FeedbackId
// Message
render() {
return(
<div className="container my-5">
  <div className="row">
    <div className="col-md-6 mt-5 mx-auto">
      <form noValidate onSubmit={this.onSubmit}>
        <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please Share Your Complaints !!....</h1>
        

        <div className="form-group btn-rg">
          <label htmlFor="FirstName" > FirstName</label>
          <input
            type="text"
            className="form-control"
            name="FirstName"
            placeholder="Enter FirstName"
            value={this.state.FirstName}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group btn-rg">
          <label htmlFor="LastName" > LastName</label>
          <input
            type="text"
            className="form-control"
            name="LastName"
            placeholder="Enter your LastName"
            value={this.state.LastName}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group btn-rg">
          <label htmlFor="Contact" > Contact</label>
          <input
            type="telephone"
            className="form-control"
            name="Contact"
            placeholder="Enter your Contact"
            value={this.state.Contact}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group btn-rg">
          <label htmlFor="Email" > Email</label>
          <input
            type= "email"
            className="form-control"
            name="Email"
            placeholder="Enter your Email"
            value={this.state.Email}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group btn-rg">
          <label htmlFor="Problem" > Please Share your Problem..... </label>
          <input
            type="text"
            className="form-control"
            name="Problem"
            placeholder="Please Share your Problem..... "
            value={this.state.Problem}
            onChange={this.onChange}
          />
        </div>


        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block mb-5"
          // href = "/DocHome"
        >
          Submit
        </button>


      </form>
     </div>
  </div>
</div>            

  
);

}  



}

export default Complaints;
