import { Link, NavLink } from "react-router";
import './header.css';

export default function Header() {

  
  return (
      <>
      <div className="header-container">

    <div className="header-icon">
        <NavLink to="/">🌞</NavLink>
        <NavLink to="/">🌧️ </NavLink>
        <NavLink to="/">☁️</NavLink>
        <NavLink to="/">❄️</NavLink>
    
    
    
    
    </div>

    <div className="header-navigation">
    

        <Link to={'/'}>Home</Link>
        <Link to={'/weather'}>Weather</Link>
        <Link to={'/about'}>Abouts us</Link>
        <Link to={'/contact'}>Contact us</Link>
    
    </div>


      </div>
      </>
    );
}