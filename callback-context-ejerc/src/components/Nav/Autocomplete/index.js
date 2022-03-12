import { useContext } from "react";
import FieldContext from "../../../context/FieldContext";

function Autocomplete(){
  
  function handleChange(e) {
    const {value} = e.target;
    fieldData.handleValue(value)
  }
  const fieldData = useContext(FieldContext)
  return(
    <input type="text" onChange={handleChange}/>
  )
}

export default Autocomplete;