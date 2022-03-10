import { useContext } from "react";
import FieldContext from "../../context/FieldContext";
function Content () {
  const {value} = useContext(FieldContext);
  return(
    <p> {value}</p>
  )
}

export default Content