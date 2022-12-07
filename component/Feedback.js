import React, { Component } from 'react';

class Feedback extends Component{

    constructor() {
        super()
        this.state = {
          FeedbackId:'',
          Message:'',
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
          Message: this.state.Message,
        }
    
    
        axios.post('/DoctorLogin', {
    
          DoctorId: user.DoctorId,
          Message: user.Message
          

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
              <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please Give Your Feedback !!....</h1>
              
              <div className="form-group btn-rg">
                <label htmlFor="FeedbackId" > FeedbackId</label>
                <input
                  type="number"
                  className="form-control"
                  name="FeedbackId"
                  placeholder="Enter your Id"
                  value={this.state.FeedbackId}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group btn-rg">
                <label htmlFor="Message" > Give your Feedback Here!!!..... </label>
                <input
                  type="text"
                  className="form-control"
                  name="Message"
                  placeholder="Give Your Feedback Here!!!...."
                  value={this.state.Message}
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

export default Feedback;
