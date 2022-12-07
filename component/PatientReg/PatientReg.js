  
import React, { Component } from 'react';
import Navber from '../Navber/Navber';
import Footer from '../Footer';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super()
    this.state = {

      PatientFirstName: '',
      PatientLastName: '',
      Email: '',
      Password: '',
      Contact: '',
      Gender: '',
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

    const newUser = {
      PatientFirstName: this.state.PatientFirstName,
      PatientLastName: this.state.PatientLastName,
      Email: this.state.Email,
      Password: this.state.Password,
      Contact: this.state.Contact,
      Gender: this.state.Gender
    }

    axios.post('/patient/register', newUser)
      .then(responce => {
        console.log('Registered');
        return responce.data;
      }) 
      .then(res => {
        if(res === 'user already exist...') {
          this.setState({errors: res})
        }else {
          this.props.history.push(`/patient/login`)
        }
      })
  }

  render() {
    return (
        <div className="body">
        <Navber />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit} >
              <h1 className="h3 mb-3 font-weight-normal btn-rg">Patient Register</h1>

              <div className="form-group">
                <label htmlFor="PatientFirstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="PatientFirstName"
                  placeholder="Enter your first name"
                  value={this.state.PatientFirstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="PatientLastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="PatientLastName"
                  placeholder="Enter your last name"
                  value={this.state.PatientFirstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="Enter email"
                  value={this.state.PatientFirstName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Contact">Contact</label>
                <input
                  type="telephone"
                  className="form-control"
                  name="Contact"
                  placeholder="Enter your Contact"
                  value={this.state.Contact}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="Gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="Gender"
                  placeholder="Enter your Gender"
                  value={this.state.Gender}
                  onChange={this.onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      </div>
    )
  }
}

export default Register;