import "./navbarStyle.scss"
import logo from "../../assets/meli2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-router-dom"
function Navbar(props) {
   function handleChange(e) {
    const {value} = e.target;
    const {propCallback} =props;
    
    propCallback(value)
   
  }
  return (
    <div className="navbar-container">
      <div className="nav-img-div">
        <img src={logo} alt="meli logo" className="nav-img" />
      </div>
      <div className="nav-input-div">
        <input type="text" className="nav-input" onChange={handleChange}/>
        <FontAwesomeIcon icon={faSearch} className="nav-button" 
        />
      </div>
      <div className="nav-link-div"> 
      <Link to="/" className="nav-link"> Home </Link> </div>
    </div>
  );
}

export default Navbar;