import Button from "./Button"
import {useContext} from "react"
import ToggleContext from "../../context/Toggle"
import "./nav.scss"

function Nav() {
  const data = useContext(ToggleContext)
  const {handleToggle} = data
  return (

  <div className="container">
    <p> reactSHOPPE </p>
    <Button
    Label="ver carrito"
    className="button-primary"
    onClick={handleToggle}
    />
  </div>
  
  )
}

export default Nav