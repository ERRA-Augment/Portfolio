import React from "react"
import './navbar.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { GitHub, LinkedIn } from "@material-ui/icons";
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp';


function Navbar() {
  return (
    
    <div className="navbar">
      <div className="home">
      <HomeRoundedIcon />
      </div>

      <div className="linkdin">
        <LinkedIn />
      </div>

      <div className="github">
        <GitHub />
      </div>

      <div className="contact">
        <ContactSupportSharpIcon />
      </div>

     
  </div>
  )
}
 
export default Navbar;