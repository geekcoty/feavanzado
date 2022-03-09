import {useContext} from "react"
import ThemeContext from "../../context/ThemeContext"

import "./style.scss";
function Content() {
  const theme = useContext(ThemeContext);
  return(
    <div className={`${theme} content`}>
    </div>
  )
}

export default Content