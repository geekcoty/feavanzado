import logo from "../../assets/meli.jpeg"
import "../Home/homeStyle.scss"
import FlagIconFactory from 'react-flag-icon-css'
function Home() {
  return (
    <div className="home-container">
      <div className="logo-div">
        <img src={logo} alt="meli logo" className="logo" />
      </div>
      <div className="link-div">
       <p><a href="/search" className="link"> <span className="flag-icon flag-icon-ar"></span> Argentina</a></p>
      <p><a href="/search" className="link"> <span className="flag-icon flag-icon-cl"></span> Chile</a></p>
    <p><a href="/search" className="link"> <span className="flag-icon flag-icon-uy"></span> Uruguay </a></p>
      </div>
    </div>
  );
}

export default Home;
