import {ThemeProvider} from "./context/ThemeContext";
import {useState} from "react"

import Button from "./components/Button";
import Content from "./components/Content"
import "./App.css";

function App() {
const [theme, setTheme] = useState("light")
function handleTheme() {
  const newTheme = theme == "light" ? "dark" : "light";
 //console.log(newTheme)
  setTheme(newTheme)
}
	return (
    <ThemeProvider value={theme}>
		<div className="App">
			<Button handleTheme={handleTheme}/>
      <Content/>
		</div>
    </ThemeProvider>
	);
}

export default App;
