import {FieldProvider} from "./context/FieldContext"
import {useState} from "react"
import Nav from "./components/Nav"
import Content from "./components/Content"

function App() {
  const [value, setValue] = useState("")

  function handleValue(paramInput){
    setValue(paramInput)
    console.log(paramInput)
  }
  const fieldData = {
    value,
    handleValue
  }
  return (
    <div className="App">
      <FieldProvider value={fieldData}>
      <Nav/>
      <Content/>
      </FieldProvider>
    </div>
  );
}

export default App;
