import {useContext} from "react"
import ThemeContext from "../../context/ThemeContext"
import "./style.scss"

function Button(props) {
  const theme = useContext(ThemeContext);
  return(
    <button className={`${theme} button`}
    onClick={()=>{props.handleTheme()}}>
      Cambiar el tema
    </button>
  )
}

export default Button;
