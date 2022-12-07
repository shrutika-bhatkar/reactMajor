import React, { Component } from 'react';
import classnames from 'classnames'
import './Navber.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';



class Navber extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

    render() { 
        return ( 
            <div>
                <Navbar className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                  })} bg="primary" text="white" var expand="lg">
                <Navbar.Brand style={{color:"white"}}>Lifescape Hospital Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      {/* <Link to="/about">About</Link> */}
                    <Nav.Link className="text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/About">About</Nav.Link>                    
                    <Nav.Link className="text-white" href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link className="text-white" href="/Contact">Contact Us</Nav.Link>
                    {/* <Nav.Link className="text-white" href="/PatientReg">Patient Register</Nav.Link> */}
                    <NavDropdown title="Login" id="basic-nav-dropdown" className="mr-5">
                      
                        <NavDropdown.Item href="/AdministratorLogin">Admin Login</NavDropdown.Item>
                        <NavDropdown.Item href="/DoctorLogin ">Doctor Login</NavDropdown.Item>
                        <NavDropdown.Item href="/PatientReg ">Patient Register</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/EmployeeLogin">Employee Login</NavDropdown.Item> */}
                    </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
 
export default Navber;