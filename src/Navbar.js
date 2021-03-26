import React from "react"
import './navbar.css'
import Navbuttons from './Navbuttons';

function Navbar() {
  return (
    <div className="navbar">
     
      <Navbuttons value="Home" classname="home" />
     
      <Navbuttons value="Linkdin" classname="linkdin" />

      <Navbuttons value="Github" classname="github" />

      <Navbuttons value="Contact" classname="contact" />
     
  </div>
  )
}
 
export default Navbar;