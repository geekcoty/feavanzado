import Task from "./Task"
import {useState} from "react"

function Tasks () {
  const [inputValue, setInputValue] = useState([])
  const [tasks, setTasks] = useState([])

  function handleChange(e){

    //tomamos el valor del input
    const {value} = e.target

    setInputValue(value)
  }

 function handleClick(){

  //usamos el spread operator para copiar el array task, agregar el valor nuevo y despues reseteamos el input.
  if (inputValue != "") {
  setTasks([...tasks, inputValue]);
  setInputValue("");
  } 


 }
 return (
   <>
   <input name="task-input" type="text" value={inputValue} onChange={handleChange} />

   <button onClick={handleClick}> Add task </button>

   {/*mapeamos las tasks*/}
   <ul className="taskContainer">
    {tasks.map((name,key)=> {
      return <Task name={name} key={key}/>;
    })}
   </ul>

   </>
  );
}

export default Tasks