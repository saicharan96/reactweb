import React  from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => 
{
    return(
        
<nav className="navbar">
<div className="logo">SEO Techie</div>
    <div className="spacer" />
    <div className="navtabs">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/About">About</Link></li>
<li><Link to="/product">Products</Link></li>
<li><Link to="/pricing">Pricing</Link></li>
<li><Link to="/Contact">Contact</Link></li>
</ul>

    </div>
  </nav>
    );
};


export default Navigation;