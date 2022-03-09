import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext"

function Child () {
  const themeData = useContext(ThemeContext);
 //console.log(themeData)
  const {theme, handleTheme} = themeData

  function handleClick() {
    handleTheme();
  
  }
  return(
    <>
  <button onClick ={handleClick}> Callback </button>
   <p> El theme es : {theme} </p>
    </>
  )
}

export default Child;