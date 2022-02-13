import {useState} from "react"

function AddTask(props) {
  const [inputValue, setInputValue] = useState([])

function handleChange(e) {
  const {value} = e.target;
  setInputValue(value)
  }
 function handleClick(){
  if(inputValue && props.propCallback) {
  props.propCallback(inputValue);
  setInputValue("");
   }
 
 }
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={()=>handleClick()}> add task </button>
    </>
  );
}

export default AddTask

