import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"
import {useState} from "react"

function App() {
  function handleCallback(inputValue){
    console.log(`el valor del input es ${inputValue}`)
  }

  return (
    <>
    <AddTask propCallback={(inputValue) => handleCallback (inputValue)} />
    <Tasks />
    </>
  );
}

export default App;
