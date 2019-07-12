import React  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => 
{
    return(
        
        <Navbar collapseOnSelect className="navbar fixed-top" expand="lg" bg="dark" variant="dark"> 
        <div class="container">
          <Navbar.Brand><Link to="/" className="head">SEO <span>Techie</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navlink right">
              <Nav.Link><Link to="/" className="active">Home</Link></Nav.Link>
              <Nav.Link><Link to="/about" className="active">About</Link></Nav.Link>
              <Nav.Link><Link to="/product" className="active">My Services</Link></Nav.Link>
              <Nav.Link><Link to="/product" className="active">Portfolio</Link></Nav.Link>
              <Nav.Link><Link to="/product" className="active">Contact me</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div> 
        </Navbar>
        
    );
};


export default Navigation;