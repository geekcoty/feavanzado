import React from "react"
import {ThemeProvider} from "./context/ThemeContext"

import DummyTwo from "./components/DummyTwo";

class App extends React.Component{
  render() {
  return (
    <ThemeProvider value="Test">
    <div className="App">
      <p>Hola</p>
      <DummyTwo/>
    </div>
    </ThemeProvider>
  );
}
}
export default App;
