import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import {useState} from "react"

function App() {
  const [taskList, setTaskList] = useState([])

  function handleCallback(inputValue){
    setTaskList([...taskList,
      {
        value: inputValue,
        isCompleted:false
  }])
}

  return (
    <>
    <AddTask propCallback={(inputValue) => handleCallback (inputValue)} />
    <Tasks  propTasks={taskList}/>
    </>
  );
}

export default App;
