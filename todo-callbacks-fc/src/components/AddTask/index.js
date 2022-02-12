import {useState} from "react"

function AddTask(props) {
  const [inputValue, setInputValue] = useState([])
  const [tasks, setTasks] = useState([])

  function handleChange(e) {
  const {value} = e.target;
  setInputValue(value)
  }
 function handleClick(){
 props.propCallback(inputValue)
 
 }
  return (
    <>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={()=>handleClick()}> add task </button>
    </>
  );
}

export default AddTask

