import "./navbarStyle.scss"
import logo from "../../assets/meli2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-img-div">
        <img src={logo} alt="meli logo" className="nav-img" />
      </div>
      <div className="nav-input-div">
        <input type="text" className="nav-input"/>
        <FontAwesomeIcon icon={faSearch} className="nav-button" 
        />
      </div>
    </div>
  );
}

export default Navbar;