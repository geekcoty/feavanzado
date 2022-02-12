import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import {useState} from "react"

function App() {
  const [tasks, setTasks] = useState([])
  function handleCallback(inputValue){
    const newTasks =[...tasks, inputValue]
    setTasks(newTasks)
  }

  return (
    <>
    <AddTask propCallback={(inputValue) => handleCallback (inputValue)} />
    <Tasks  propTasks={tasks}/>
    </>
  );
}

export default App;
