import Child from "./components/Child"
import {useState} from "react"
import {ThemeProvider} from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light")

  function handleTheme(){
    if (theme == "light") {
      setTheme ("dark")
    } else {
      setTheme("light")
    }
  }
  const themeContextData= {
    theme,
    handleTheme

  }
  return (
    <ThemeProvider value={themeContextData}>

    <div className="App">
      <p> Theme actual: </p>
      <Child />
    </div>

     </ThemeProvider>
  );
}

export default App;
